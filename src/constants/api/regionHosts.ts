/**
 * List of all available region API hosts
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionIdProperties, RegionHost, RegionIdEnum } from "../../types";

export const hosts: RegionIdProperties<RegionHost | ReadonlyArray<RegionHost>> =
  Object.freeze({
    [RegionIdEnum.us]: RegionHost.us,
    [RegionIdEnum.eu]: RegionHost.eu,
    [RegionIdEnum.kr]: [RegionHost.kr, RegionHost.tw],
    [RegionIdEnum.cn]: RegionHost.cn,
  });
