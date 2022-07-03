/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import {
  RegionIdProperties,
  RegionNameArray,
  RegionIdEnum,
  RegionNameEnum,
} from "../../types";

export const regions: RegionIdProperties<RegionNameArray> = Object.freeze({
  [RegionIdEnum.us]: Object.freeze([RegionNameEnum.us]),
  [RegionIdEnum.eu]: Object.freeze([RegionNameEnum.eu]),
  [RegionIdEnum.kr]: Object.freeze([RegionNameEnum.kr, RegionNameEnum.tw]),
  [RegionIdEnum.cn]: Object.freeze([RegionNameEnum.cn]),
});
