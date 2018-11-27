/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import RegionIdProperties from '../../interfaces/RegionIdProperties';
import { RegionNameList } from '../../types/constants';

const regions: RegionIdProperties<RegionNameList> = {
  1: ['us'],
  2: ['eu'],
  3: ['kr', 'tw'],
  5: ['cn'],
};

export default regions;
