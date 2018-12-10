/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { IRegionIdProperties } from '../../interfaces';
import { RegionNameArray } from '../../types';

const regions: IRegionIdProperties<RegionNameArray> = {
  1: ['us'],
  2: ['eu'],
  3: ['kr', 'tw'],
  5: ['cn'],
};

Object.preventExtensions(regions);

export default regions;
