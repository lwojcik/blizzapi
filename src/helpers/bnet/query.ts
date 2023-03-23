import { endpoint as validateEndpoint } from "../validators";
import { getAccessTokenObject, validateAccessToken } from "../oauth";
import { getApiHostByRegion } from "../../utils/api";
import { fetchFromUri } from "../fetch";
import {
  BattleNetQueryOptions,
  AccessToken,
  HttpMethod,
  ResponseError,
  ErrorCode,
  ErrorResponseMessage,
  RegionIdOrName,
} from "../../types";

const queryWithAccessToken = <T = unknown>(
  queryOptions: BattleNetQueryOptions,
  accessToken: AccessToken
): Promise<T> => {
  const { region, endpoint, options } = queryOptions;
  const { headers, params, timeout } = options;
  const validEndpoint = validateEndpoint(endpoint);

  if (!validEndpoint)
    throw new RangeError(`${endpoint} is not a valid endpoint.`);

  const apiHost = getApiHostByRegion(region as RegionIdOrName) as string;
  const requestUri = `${apiHost}${endpoint}`;
  const authHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };

  const fetchHeaders = {
    ...headers,
    ...authHeaders,
  };

  return fetchFromUri<T>({
    uri: requestUri,
    method: HttpMethod.GET,
    headers: fetchHeaders,
    ...(params && { params }),
    ...(timeout && { timeout }),
  });
};

const handleExpiredAccessToken = async <T = unknown>(
  queryOptions: BattleNetQueryOptions
) => {
  const { onAccessTokenRefresh } = queryOptions.options;

  const newAccessToken = (await getAccessTokenObject(queryOptions))
    .access_token;
  onAccessTokenRefresh?.(newAccessToken);
  return queryWithAccessToken<T>(queryOptions, newAccessToken);
};

export const query = async <T = unknown>(
  queryOptions: BattleNetQueryOptions
): Promise<T | ResponseError> => {
  const { region, accessToken } = queryOptions;

  const {
    validateAccessTokenOnEachQuery,
    refreshExpiredAccessToken,
    onAccessTokenExpired,
  } = queryOptions.options;

  if (validateAccessTokenOnEachQuery) {
    const invalidAccessToken = !(await validateAccessToken(
      region,
      accessToken
    ));

    if (invalidAccessToken) {
      onAccessTokenExpired?.();

      if (refreshExpiredAccessToken) {
        return handleExpiredAccessToken<T>(queryOptions);
      }

      return {
        error: ErrorResponseMessage.AccessTokenInvalid,
      };
    }
  }

  try {
    return await queryWithAccessToken<T>(queryOptions, accessToken);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.status === ErrorCode.NotAuthorized) {
      onAccessTokenExpired?.();
      if (refreshExpiredAccessToken) {
        return handleExpiredAccessToken<T>(queryOptions);
      }
      return Promise.resolve({
        error: ErrorResponseMessage.AccessTokenExpired,
      });
    }
    throw error;
  }
};
