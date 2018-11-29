import constants from '../../constants';

// import IRegionIdProperties from '../../interfaces/IRegionIdProperties';
import { RegionIdAsIntOrString, RegionIdArray, RegionName, RegionNameArray } from '../../types';

/**
 * Returns a list of all available regions
 *
 * @return List of all available regions indexed by region id.
 */
export function getAllRegions() {
  return constants.REGIONS;
}

/**
 * Returns a list of all available region ids
 *
 * @return List of all available regions as flat array of numbers.
 */
export function getAllRegionIds(): RegionIdArray {
  const regionKeys = Object.keys(constants.REGIONS);
  const regionKeysAsIntegers = regionKeys.map(regionKey => parseInt(regionKey, 10));
  return regionKeysAsIntegers;
}

/**
 * Returns a list of all available region names
 *
 * @return {Array} List of all available regions as flat array of strings.
 */
export function getAllRegionNames(): RegionNameArray {
  const regionNames = Object.values(constants.REGIONS);
  const flattenedRegionNames = ([] as (RegionName | RegionNameArray)[]).concat(...regionNames);
  const regionNamesAsStrings = flattenedRegionNames.map((regionName: any) => regionName.toString());
  return regionNamesAsStrings;
}

/**
 * Returns region name(s) represented by given region id
 *
 * @param regionId Region id as integer or string
 * @return Region name represented as two-letter code (e.g. "us" for Americas) or an array of regions
 * if more than one is specified for a given region id
 */
export function getRegionNameById(regionId: RegionIdAsIntOrString) {
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
