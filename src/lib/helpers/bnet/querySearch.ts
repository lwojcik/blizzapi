import { RegionIdOrName, Endpoint, Selector, AccessToken } from '../../types';
import { default as query } from './query';
import { searchObjectBySelector } from '../json';

export default async (
  region: RegionIdOrName,
  endpoint: Endpoint,
  selector: Selector,
  accessToken: AccessToken,
) => searchObjectBySelector(await query(region, endpoint, accessToken), selector);
