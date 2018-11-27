import constants from '../constants';

// todo: write interfaces

/**
 * Returns a list of all available regions
 *
 * @return List of all available regions indexed by region id.
 */
export function getAllRegions(): object {
  return constants.REGIONS;
}

/**
 * Returns a list of all available region ids
 *
 * @return List of all available regions as flat array of numbers.
 */
export function getAllRegionIds(): number[] {
  const regionKeys = Object.keys(constants.REGIONS);
  const regionKeysAsIntegers = regionKeys.map(regionKey => parseInt(regionKey, 10));
  return regionKeysAsIntegers;
}

/**
 * Returns a list of all available region names
 *
 * @return {Array} List of all available regions as flat array of strings.
 */
export function getAllRegionNames(): string[] {
  const regionNames = Object.values(constants.REGIONS);
  const flattenedRegionNames = ([] as (string | string[])[]).concat(...regionNames);
  const regionNamesAsStrings = <string[]>flattenedRegionNames.map((regionName: any) => regionName.toString());
  return regionNamesAsStrings;
}

/**
 * Returns region name(s) represented by given region id
 *
 * @return Region name represented as two-letter code (e.g. "us" for Americas) or an array of regions
 * if more than one is specified for a given region id
 */
export function getRegionNameById(regionId: number): string | string[] {
  const regionIds = Object.keys(constants.REGIONS);
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = regionIds.includes(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getRegionNameById`);
  }

  return constants.REGIONS[regionIdAsString];
}

// // todo: error handling

// // - regionality
// // - validators
// // - servers

// // const getAllRegions = () => constants.REGIONS;

// // const getAllRegionLocales = () => constants.LOCALES;

// // const getRegionNameById = regionId => constants.REGIONS[regionId];

// // const getRegionIdByName = (regionName) => {
// //   // get region id by name
// // };

// // const validateLocale = (locale) => {
// //   // validate locale via regex
// // };

// // const validateRegionName = (regionName) => {
// //   // validate region name
// // };

// // const validateRegionId = (regionId) => {
// //   // validate region id
// // };

// // const getDefaultLocaleForRegion = regionId => constants.DEFAULT_LOCALES[regionId];

// // const getAvailableLocalesForRegion = (regionId) => {
// //   // get region locales for region id
// // };

// // const checkIfLocaleIsAvailableForRegion = (locale, regionId) => {
// //   // checkIfLocaleIsAvailableForRegion
// // };

// // const getAvailableRealmsForRegion = regionId => constants.SC2_REALMS[regionId];

// // module.exports = {
// //   getAllRegions,
// //   // getAllRegionLocales,
// //   // getDefaultLocaleForRegion,
// //   // checkIfLocaleIsAvailableForRegion,
// //   // validateLocale,
// //   // getRegionNameById,
// //   // getRegionIdByName,
// //   // getAvailableLocalesForRegion,
// //   // getAvailableRealmsForRegion,
// // };
