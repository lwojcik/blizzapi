/**
 * List of all available API regions
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionIdProperties, RegionNameArray } from "../../types";

export const regions: RegionIdProperties<RegionNameArray> = Object.freeze({
  1: Object.freeze(["us"]),
  2: Object.freeze(["eu"]),
  3: Object.freeze(["kr", "tw"]),
  5: Object.freeze(["cn"]),
});
