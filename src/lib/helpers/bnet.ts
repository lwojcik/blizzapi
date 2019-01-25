import { RegionIdOrName, AccessToken, Endpoint, Endpoints } from '../types';
import { QueryBatchOptions } from '../interfaces';
import { getApiHostByRegion } from '../utils/api/hosts';
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

export function validateEndpoints(endpoints: Endpoints) {
  return endpoints.every(endpoint => validateEndpoint(endpoint));
}

export function queryEndpoint(region: RegionIdOrName, endpoint:string, accessToken:AccessToken) {
  const isEndpointValid = validateEndpoint(endpoint);

  if (!isEndpointValid) {
    throw new RangeError(`${endpoint} is not a valid endpoint.`);
  }

  const apiHost = getApiHostByRegion(region);
  const requestUri = `${apiHost}${endpoint}`;

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);

  return fetchFromUri(requestUri, 'GET', headers);
}

export function queryBatch(region: RegionIdOrName, endpoints:Endpoints, queryBatchOptions:QueryBatchOptions, accessToken:AccessToken) {
  const areEndpointsValid = validateEndpoints(endpoints);

  if (!areEndpointsValid) {
    throw new RangeError(`${endpoints} is not a valid endpoint batch.`);
  }
  console.log(region);
  console.log(endpoints);
  console.log(queryBatchOptions);
  console.log(accessToken);
  return { status: 'query batch done' };
}
