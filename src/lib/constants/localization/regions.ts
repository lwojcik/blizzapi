/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import '../../interfaces';
import '../../types';

const regions: Interfaces.IRegionIdProperties<Types.RegionNameArray> = {
  1: ['us'],
  2: ['eu'],
  3: ['kr', 'tw'],
  5: ['cn'],
};

export default regions;
