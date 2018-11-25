import constants from '../constants/constants';

/**
 * Returns a list of all available regions
 * @return {Object} List of all available regions.
 */
const getAllRegions = (): object => <object>constants.REGIONS;

/**
 * Returns a list of all available region ids
 * @return {Array} List of all available regions as flat array of numbers.
 */
const getAllRegionIds = (): number[] => {
  const regionKeys = <string[]>Object.keys(constants.REGIONS);
  const regionKeysAsIntegers = <number[]>regionKeys.map(regionKey => parseInt(regionKey, 10));
  return <number[]>regionKeysAsIntegers;
};

/**
 * Returns a list of all available region names
 *
 * @return {Array} List of all available regions as flat array of strings.
 */
const getAllRegionNames = (): string[] => {
  const regionNames = <string[]>Object.values(constants.REGIONS);
  const flattenedRegionNames = ([] as (string|string[])[]).concat(...regionNames);
  const regionNamesAsStrings = <string[]>flattenedRegionNames.map((regionName:any) => regionName.toString());
  return <string[]>regionNamesAsStrings;
};

/**
 * Returns region name represented by given region id
 *
 * @return {string} Region name
 */
const getRegionNameById = (regionId: number): string => {
  const regionIds = <string[]>Object.keys(constants.REGIONS);
  const regionIdAsString = <string>regionId.toString();
  const isRegionIdValid = <Boolean>regionIds.includes(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getRegionNameById`);
  }

  return <string>constants.REGIONS[regionIdAsString];
};

/**
 * Helpers object to be exported
 */
const helpers = {
  getAllRegions,
  getAllRegionIds,
  getAllRegionNames,
  getRegionNameById,
};

export = helpers;

// todo: error handling

// - regionality
// - validators
// - servers

// const getAllRegions = () => constants.REGIONS;

// const getAllRegionLocales = () => constants.LOCALES;

// const getRegionNameById = regionId => constants.REGIONS[regionId];

// const getRegionIdByName = (regionName) => {
//   // get region id by name
// };

// const validateLocale = (locale) => {
//   // validate locale via regex
// };

// const validateRegionName = (regionName) => {
//   // validate region name
// };

// const validateRegionId = (regionId) => {
//   // validate region id
// };

// const getDefaultLocaleForRegion = regionId => constants.DEFAULT_LOCALES[regionId];

// const getAvailableLocalesForRegion = (regionId) => {
//   // get region locales for region id
// };

// const checkIfLocaleIsAvailableForRegion = (locale, regionId) => {
//   // checkIfLocaleIsAvailableForRegion
// };

// const getAvailableRealmsForRegion = regionId => constants.SC2_REALMS[regionId];

// module.exports = {
//   getAllRegions,
//   // getAllRegionLocales,
//   // getDefaultLocaleForRegion,
//   // checkIfLocaleIsAvailableForRegion,
//   // validateLocale,
//   // getRegionNameById,
//   // getRegionIdByName,
//   // getAvailableLocalesForRegion,
//   // getAvailableRealmsForRegion,
// };
