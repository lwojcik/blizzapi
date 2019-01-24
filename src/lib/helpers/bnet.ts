import { RegionIdOrName, AccessToken, Endpoint } from '../types';
import { getApiHostByRegionIdOrRegionName } from '../utils/api/hosts';
import { fetchFromUri } from './fetch';

// construct checkTokenUri
// construct getTokenUri

export function validateEndpoint(endpoint: Endpoint) {
  const endpointStartsWithSlash = endpoint[0] === '/';
  const endpointIsLongEnough = endpoint.length > 3;
  const endpointHasMoreThanOneSlash = endpoint.split('/').length-1 > 1;

  if (endpointStartsWithSlash
    && endpointIsLongEnough
    && endpointHasMoreThanOneSlash) {
      return true;
    }
  return false;
}

export function queryEndpoint(region: RegionIdOrName, endpoint:string, accessToken:AccessToken) {
  const isEndpointValid = validateEndpoint(endpoint);

  if (!isEndpointValid) {
    throw new RangeError(`Error querying endpoint: ${endpoint} is not a valid endpoint.`);
  }

  const apiHost = getApiHostByRegionIdOrRegionName(region);
  const requestUri = `${apiHost}${endpoint}`;

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);

  return fetchFromUri(requestUri, 'GET', headers);
}
