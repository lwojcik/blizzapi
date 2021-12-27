/**
 * List of all available region API hosts
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionId, RegionIdProperties, RegionHost } from "../../types";

export const hosts: RegionIdProperties<RegionHost | ReadonlyArray<RegionHost>> =
  Object.freeze({
    [RegionId.us]: RegionHost.us,
    [RegionId.eu]: RegionHost.eu,
    [RegionId.kr]: [RegionHost.kr, RegionHost.tw],
    [RegionId.cn]: RegionHost.cn,
  });
