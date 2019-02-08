import { RegionIdOrName, AccessToken } from '../../types';
import { endpoint as validateEndpoint } from '../validators';
import { getApiHostByRegion } from '../../utils/api';
import { fetchFromUri } from '../fetch';

export default async (region: RegionIdOrName, endpoint: string, accessToken: AccessToken) => {
  const validEndpoint = validateEndpoint(endpoint);

  // tslint:disable-next-line no-if-statement
  if (!validEndpoint) throw new RangeError(`${endpoint} is not a valid endpoint.`);

  const apiHost = getApiHostByRegion(region);
  const requestUri = `${apiHost}${endpoint}`;
  const headers = new Headers();

  // tslint:disable-next-line no-expression-statement
  headers.append('Authorization', `Bearer ${accessToken}`);

  return fetchFromUri(requestUri, 'GET', headers);
};
