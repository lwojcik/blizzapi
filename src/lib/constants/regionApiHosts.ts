/**
 * List of all available region API hosts
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import RegionIdProperties from '../interfaces/RegionIdProperties';
import { RegionApiHostUri } from '../types/constants';

const regionApiHosts:RegionIdProperties<RegionApiHostUri> = {
  1: 'https://us.api.blizzard.com',
  2: 'https://eu.api.blizzard.com',
  3: 'https://kr.api.blizzard.com',
  5: 'https://api.blizzard.com.cn',
};

export default regionApiHosts;
