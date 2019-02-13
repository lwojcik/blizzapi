import { RegionIdOrName, Endpoint, Selector, AccessToken } from '../../types';
import { QueryOptions } from '../../interfaces';
import { default as query } from './query';
import { searchObjectBySelector } from '../json';

export default async (
  region: RegionIdOrName,
  endpoint: Endpoint,
  selector: Selector,
  accessToken: AccessToken,
  options: QueryOptions,
) =>
  searchObjectBySelector(
    await query(region, endpoint, accessToken, options),
    selector,
    options.queryEngine,
  );
