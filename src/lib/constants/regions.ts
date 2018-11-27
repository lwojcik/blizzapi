/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import Constant from '../interfaces/Constant';

type RegionList = string[];

const regions:Constant<RegionList> = {
  1: ['us'],
  2: ['eu'],
  3: ['kr', 'tw'],
  5: ['cn'],
};

export default regions;
