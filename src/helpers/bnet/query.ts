import { endpoint as validateEndpoint } from '../validators';
import { getAccessToken, validateAccessToken } from '../oauth';
import { getApiHostByRegion } from '../../utils/api';
import { fetchFromUri } from '../fetch';
import {
  RegionIdOrName,
  AccessToken,
  AccessTokenOptions,
  QueryOptions,
} from '../../types';

interface BattleNetQueryOptions {
  region: RegionIdOrName;
  endpoint: string;
  clientId: string;
  clientSecret: string;
  accessToken: AccessToken;
  options: AccessTokenOptions & QueryOptions;
}

const queryWithAccessToken = (queryOptions: BattleNetQueryOptions, accessToken: AccessToken) => {
  const {
    region,
    endpoint,
    options,
  } = queryOptions;
  const {
    headers,
    params,
    timeout,
  } = options;
  const validEndpoint = validateEndpoint(endpoint);
  if (!validEndpoint) throw new RangeError(`${endpoint} is not a valid endpoint.`);

  const apiHost = getApiHostByRegion(region);
  const requestUri = `${apiHost}${endpoint}`;
  const authHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };

  const fetchHeaders = {
    ...headers,
    ...authHeaders,
  };

  return fetchFromUri({
    uri: requestUri,
    method: 'GET',
    headers: fetchHeaders,
    ...params && { params },
    ...timeout && { timeout },
  });
};

export const query = async (queryOptions: BattleNetQueryOptions) => {
  const { region, accessToken } = queryOptions;
  const {
    validateAccessTokenOnEachQuery,
    refreshExpiredAccessToken,
    onAccessTokenExpired,
    onAccessTokenRefresh,
  } = queryOptions.options;

  if (validateAccessTokenOnEachQuery) {
    const invalidAccessToken = !(await validateAccessToken(region, accessToken));
    if (invalidAccessToken) {
      return {
        error: 'access_token_invalid',
      };
    }
  }

  try {
    return await queryWithAccessToken(queryOptions, accessToken);
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      onAccessTokenExpired?.();
      if (refreshExpiredAccessToken) {
        const newAccessToken = await getAccessToken(queryOptions);
        onAccessTokenRefresh?.(newAccessToken);
        return queryWithAccessToken(queryOptions, newAccessToken);
      }
      return Promise.resolve({
        error: 'access_token_invalid',
      });
    }
    throw error;
  }
};
