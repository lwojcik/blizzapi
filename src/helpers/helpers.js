const constants = require('./../constants/constants');

// todo: error handling

// - regionality
// - validators
// - servers

const getAllRegions = () => constants.REGIONS;

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

module.exports = {
  getAllRegions,
  // getAllRegionLocales,
  // getDefaultLocaleForRegion,
  // checkIfLocaleIsAvailableForRegion,
  // validateLocale,
  // getRegionNameById,
  // getRegionIdByName,
  // getAvailableLocalesForRegion,
  // getAvailableRealmsForRegion,
};
