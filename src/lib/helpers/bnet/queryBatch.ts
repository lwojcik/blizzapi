import { RegionIdOrName, Endpoints, AccessToken } from '../../types';
import { endpoints as validateEndpoints } from '../validators';
import queryEndpoint from './queryEndpoint';
import { delay } from '../common';

export default async (region: RegionIdOrName, endpoints: Endpoints, accessToken: AccessToken) => {
  const validEndpoints = validateEndpoints(endpoints);

  /* tslint:disable-next-line no-if-statement */
  if (!validEndpoints) throw new RangeError(`${endpoints} is not a valid endpoint batch.`);

  const fetchObjects = endpoints.map(async (endpoint, i) =>
    delay(i * 1000).then(() => queryEndpoint(region, endpoint, accessToken)),
  );
  return Promise.all(fetchObjects);
};
