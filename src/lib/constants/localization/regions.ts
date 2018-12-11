/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { IRegionIdProperties } from '../../interfaces';
import { RegionNameArray } from '../../types';

const regions: IRegionIdProperties<RegionNameArray> = Object.freeze({
  1: Object.freeze(['us']),
  2: Object.freeze(['eu']),
  3: Object.freeze(['kr', 'tw']),
  5: Object.freeze(['cn']),
});

export default regions;
