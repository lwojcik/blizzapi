import { RegionIdOrName, AccessToken } from '../../../../@types';
import { endpoint as validateEndpoint } from '../validators';
import { getApiHostByRegion } from '../../utils/api';
import { fetchFromUri } from '../fetch';

interface QueryOptions {
  region: RegionIdOrName,
  endpoint: string,
  accessToken: AccessToken,
}

export default (options: QueryOptions) => {
  const { region, endpoint, accessToken } = options;
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
};
