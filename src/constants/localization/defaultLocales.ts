/**
 * List of default locales for each region
 *
 * This is not imposed by Blizzard. It is in fact possible to fetch data without specific locale,
 * in which case returned data usually contains information in all available languages.
 *
 * BlizzAPI uses this list to provide reasonable defaults for request functions
 * while still permitting to fetch data with no locale specified.
 *
 * based on https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import {
  RegionIdProperties,
  DefaultLocaleIndex,
  RegionIdEnum,
} from "../../types";

export const defaultLocales: RegionIdProperties<DefaultLocaleIndex> =
  Object.freeze({
    [RegionIdEnum.us]: DefaultLocaleIndex.us,
    [RegionIdEnum.eu]: DefaultLocaleIndex.eu,
    [RegionIdEnum.kr]: DefaultLocaleIndex.kr,
    [RegionIdEnum.cn]: DefaultLocaleIndex.cn,
  });
