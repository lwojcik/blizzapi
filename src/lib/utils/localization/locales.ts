import constants from '../../constants';

import { Locale, LocaleArray } from '../../types';

export namespace Locales {
  /**
   * Returns a list of all available locales
   *
   * @return List of all available regions indexed by region id.
   */
  export function getAllLocales() {
    return constants.LOCALES;
  }

/**
 * Returns a list of all locales as
 *
 * @return {Array} List of all available locales as flat array of strings.
 */
  export function getAllLocaleNames(): LocaleArray {
    const locales = Object.values(constants.LOCALES);
    const flattenedLocales = ([] as (Locale | LocaleArray)[]).concat(...locales);
    const localesAsStrings = flattenedLocales.map((locale: any) => locale.toString());
    return localesAsStrings;
  }
}
// /**
//  * Returns a list of all available region ids
//  *
//  * @return List of all available regions as flat array of numbers.
//  */
// export function getAllRegionIds(): RegionIdArray {
//   const regionKeys = Object.keys(constants.REGIONS);
//   const regionKeysAsIntegers = regionKeys.map(regionKey => parseInt(regionKey, 10));
//   return regionKeysAsIntegers;
// }

// /**
//  * Returns a list of all available region names
//  *
//  * @return {Array} List of all available regions as flat array of strings.
//  */
// export function getAllRegionNames(): RegionNameArray {
//   const regionNames = Object.values(constants.REGIONS);
//   const flattenedRegionNames = ([] as (RegionName | RegionNameArray)[]).concat(...regionNames);
//   const regionNamesAsStrings = flattenedRegionNames.map((regionName: any) => regionName.toString());
//   return regionNamesAsStrings;
// }

// /**
//  * Returns region name(s) represented by given region id
//  *
//  * @param regionId Region id as integer or string
//  * @return Region name represented as two-letter code (e.g. "us" for Americas) or an array of regions
//  * if more than one is specified for a given region id
//  */
// export function getRegionNameById(regionId: RegionIdAsNumberOrString) {
//   const regionIds = Object.keys(constants.REGIONS);
//   const regionIdAsString = regionId.toString();
//   const isRegionIdValid = regionIds.includes(regionIdAsString);

//   if (!isRegionIdValid) {
//     throw new RangeError(`${regionIdAsString} is not a valid parameter for getRegionNameById()`);
//   }

//   return constants.REGIONS[regionIdAsString];
// }

// /**
//  * Validates region id provided as number or string
//  *
//  * @param regionId Region id as integer or string
//  * @return true for valid region id. false for invalid region id
//  */
// export function validateRegionId(regionId: RegionIdAsNumberOrString) {
//   return Boolean(getRegionNameById(regionId));
// }

// /**
//  * Returns region id for given region name
//  *
//  * @param regionName Region id as integer or string
//  * @return Region id as number
//  */
// export function getRegionIdByName(regionName: RegionName) {
//   const regionNameLowercase = regionName.toLowerCase();
//   const regions = constants.REGIONS;
//   const regionKeys = Object.keys(regions);
//   const regionIdArray = regionKeys.filter(key => regions[key].includes(regionNameLowercase));
//   const regionId = Number(regionIdArray[0]) || false;

//   if (!regionId) {
//     throw new RangeError(`"${regionName}" is not a valid parameter for getRegionIdByName()`);
//   }

//   return regionId;
// }

// /**
//  * Validates region name provided as string
//  *
//  * @param regionId Region name
//  * @return true for valid region name. false for invalid region name
//  */
// export function validateRegionName(regionName: RegionName) {
//   return Boolean(getRegionIdByName(regionName));
// }
