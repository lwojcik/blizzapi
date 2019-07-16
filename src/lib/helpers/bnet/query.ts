import { RegionIdOrName, AccessToken } from '../../../../@types';
import { endpoint as validateEndpoint } from '../validators';
import { getApiHostByRegion } from '../../utils/api';
import { fetchFromUri } from '../fetch';
// import { BlizzAPIOptions } from '../../classes/BlizzAPI';


export default (
  region: RegionIdOrName,
  endpoint: string,
  accessToken: AccessToken,
  // options?: BlizzAPIOptions,
) => {
  const validEndpoint = validateEndpoint(endpoint);
  if (!validEndpoint) throw new RangeError(`${endpoint} is not a valid endpoint.`);

  const apiHost = getApiHostByRegion(region);
  const requestUri = `${apiHost}${endpoint}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  }

  return fetchFromUri(requestUri, 'GET', headers);
};
