const constants = require('./../constants/constants');

/**
 * Returns a list of all available regions
 * @return {Object} List of all available regions.
 */
const getAllRegions = () => constants.REGIONS;

/**
 * Returns a list of all available region ids
 * @return {Array} List of all available regions as numbers.
 */
const getAllRegionIds = () => {
  const regionKeys = Object.keys(constants.REGIONS);
  const regionKeysAsIntegers = regionKeys.map(regionKey => parseInt(regionKey, 10));
  return regionKeysAsIntegers;
};

/**
 * Helpers object to be exported
 */
const helpers = {
  getAllRegions,
  getAllRegionIds,
};

module.exports = helpers;

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
