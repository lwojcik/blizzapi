import { RegionIdOrName, Endpoints, AccessToken } from '../../types';
import { QueryOptions } from '../../interfaces';
import { endpoints as validateEndpoints } from '../validators';
import { default as query } from './query';
import { delay } from '../common';

export default async (
  region: RegionIdOrName,
  endpoints: Endpoints,
  accessToken: AccessToken,
  options: QueryOptions,
) => {
  const interval = options.batchQueryInterval;
  const validEndpoints = validateEndpoints(endpoints);

  /* tslint:disable-next-line no-if-statement */
  if (!validEndpoints) throw new RangeError(`${endpoints} is not a valid endpoint batch.`);

  const fetchObjects = endpoints.map(async (endpoint, i) =>
    delay(i * interval).then(() => query(region, endpoint, accessToken)),
  );
  return Promise.all(fetchObjects);
};
