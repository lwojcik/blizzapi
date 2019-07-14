/**
 * List of default locales for each region
 *
 * This is not imposed by Blizzard. It is in fact possible to fetch data without specific locale,
 * in which case returned data contains information in all available languages.
 *
 * BlizzAPI uses this list to provide reasonable defaults for request functions
 * while still permitting to fetch data with no locale specified.
 *
 * based on https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionIdProperties } from '../../../@interfaces';
import { DefaultLocaleIndex } from '../../../@types';

const defaultLocales: RegionIdProperties<DefaultLocaleIndex> = {
  1: 0,
  2: 0,
  3: 0,
  5: 0,
};

export default Object.freeze(defaultLocales);
