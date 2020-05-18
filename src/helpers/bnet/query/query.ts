import {
  RegionIdOrName,
  AccessToken,
  AccessTokenOptions,
} from '../../../../types';
import { endpoint as validateEndpoint } from '../validators';
import { getAccessToken, validateAccessToken }  from '../oauth';
import { getApiHostByRegion } from '../../../utils/api';
import fetchFromUri from '../../fetch/fetchFromUri/fetchFromUri';

interface QueryOptions {
  region: RegionIdOrName,
  endpoint: string,
  clientId: string,
  clientSecret: string,
  accessToken: AccessToken,
  options: AccessTokenOptions,
}

const queryWithAccessToken = (queryOptions: QueryOptions, accessToken: AccessToken) => {
  const { region, endpoint } = queryOptions;
  const validEndpoint = validateEndpoint(endpoint);
  if (!validEndpoint) throw new RangeError(`${endpoint} is not a valid endpoint.`);

  const apiHost = getApiHostByRegion(region);
  const requestUri = `${apiHost}${endpoint}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  return fetchFromUri({
    headers,
    uri: requestUri,
    method: 'GET',
  });
}

export default async (queryOptions: QueryOptions) => {
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
      }
    }
  }

  try {
    const data = await queryWithAccessToken(queryOptions, accessToken);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      onAccessTokenExpired && onAccessTokenExpired();
      if (refreshExpiredAccessToken) {
        const newAccessToken = await getAccessToken(queryOptions);
        onAccessTokenRefresh && onAccessTokenRefresh(newAccessToken);
        return queryWithAccessToken(queryOptions, newAccessToken);
      }
      return Promise.resolve({
        error: 'access_token_invalid',
      });
    }
    throw error;
  }
};
