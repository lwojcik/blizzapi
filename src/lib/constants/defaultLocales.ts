/**
 * List of default locales for each region
 * 
 * This is not imposed by Blizzard. It is in fact possible to fetch data without specific locale,
 * in which case returned data constains information in all available languages.
 * 
 * I use this list to provide reasonable defaults for request functions
 * while still permitting to fetch data without specified locale.
 * 
 * based on https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import Constant from '../interfaces/Constant';

const defaultLocales:Constant<Number> = {
  1: 0,
  2: 0,
  3: 0,
  5: 0,
};

export default defaultLocales;
