/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import {
  RegionIdProperties,
  RegionNameArray,
  RegionId,
  RegionName,
} from "../../types";

export const regions: RegionIdProperties<RegionNameArray> = Object.freeze({
  [RegionId.us]: Object.freeze([RegionName.us]),
  [RegionId.eu]: Object.freeze([RegionName.eu]),
  [RegionId.kr]: Object.freeze([RegionName.kr, RegionName.tw]),
  [RegionId.cn]: Object.freeze([RegionName.cn]),
});
