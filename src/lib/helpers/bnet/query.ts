import { RegionIdOrName, AccessToken } from '../../../../@types';
import { AccessTokenOptions } from '../../../../@interfaces'
import { endpoint as validateEndpoint } from '../validators';
import { getAccessToken, validateAccessToken }  from '../oauth';
import { getApiHostByRegion } from '../../utils/api';
import { fetchFromUri } from '../fetch';

interface QueryOptions {
  region: RegionIdOrName,
  endpoint: string,
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

const accessTokenIsValid = async (region: RegionIdOrName, accessToken: AccessToken, next: Function) => {
  const isAccessTokenValid = await validateAccessToken(region, accessToken);
  if (!isAccessTokenValid) {
    return {
      error: 'access_token_invalid',
    }
  }
  return next();
}

export default async (queryOptions: QueryOptions) => {
  const { region, accessToken } = queryOptions;
  if (queryOptions.options.validateAccessTokenOnEachQuery) {
    return accessTokenIsValid(region, accessToken, async () => {
      try {
        const data = await queryWithAccessToken(queryOptions, `${accessToken}23`);
        return data;
      } catch (error) {
        const newAccessToken = await getAccessToken(queryOptions);
        return 'lololo';
      }
    });
  }

  return queryWithAccessToken(queryOptions, queryOptions.accessToken);
};
