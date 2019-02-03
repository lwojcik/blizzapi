import { RegionIdOrName, AccessToken, Endpoint, Endpoints } from '../types';
// import { QueryBatchOptions } from '../interfaces';
import { getApiHostByRegion } from '../utils/api/hosts';
import { fetchFromUri } from './fetch';
import { delay } from './common';

// construct checkTokenUri
// construct getTokenUri

export const validateEndpoint = (endpoint: Endpoint) => {
  const endpointStartsWithSlash = endpoint[0] === '/';
  const endpointIsLongEnough = endpoint.length > 3;
  const endpointHasMoreThanOneSlash = endpoint.split('/').length - 1 > 1;

  return endpointStartsWithSlash
    ? endpointIsLongEnough
      ? endpointHasMoreThanOneSlash
        ? true
        : false
      : false
    : false;
};

export const validateEndpoints = (endpoints: Endpoints) => endpoints.every(endpoint => validateEndpoint(endpoint));

export const queryEndpoint = (region: RegionIdOrName, endpoint: string, accessToken: AccessToken) => {
  const validEndpoint = validateEndpoint(endpoint);
  /* tslint:disable no-if-statement */
  if (!validEndpoint) throw new RangeError(`${endpoint} is not a valid endpoint.`);
  /* tslint:disable no-if-statement */

  const apiHost = getApiHostByRegion(region);
  const requestUri = `${apiHost}${endpoint}`;
  const headers = new Headers();
  /* tslint:disable no-expression-statement */
  headers.append('Authorization', `Bearer ${accessToken}`);
  /* tslint:enable no-expression-statement */
  return fetchFromUri(requestUri, 'GET', headers);
};

export const queryBatch = async (region: RegionIdOrName, endpoints: Endpoints, accessToken: AccessToken) => {
  const validEndpoints = validateEndpoints(endpoints);
  if (!validEndpoints) throw new RangeError(`${endpoints} is not a valid endpoint batch.`);

  const fetchObjects = endpoints.map(async (endpoint, i) =>
    delay(i * 1000).then(() => queryEndpoint(region, endpoint, accessToken)),
  );
  return Promise.all(fetchObjects);
};
