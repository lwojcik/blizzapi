import constants from '../../constants';
import { validateRegionId } from './regions';
import { Locale, LocaleArray, RegionIdAsNumberOrString } from '../../types';

/**
 * Returns a list of all available locales
 *
 * @return List of all available regions indexed by region id as array of strings.
 */
export function getAllLocales() {
  return constants.LOCALES;
}

/**
 * Returns a list of all locale names
 *
 * @return List of all available locales as flat array of strings.
 */
export function getAllLocaleNames(): LocaleArray {
  const locales = Object.values(constants.LOCALES);
  const flattenedLocales = ([] as LocaleArray[]).concat(...locales);
  const localesAsStrings = flattenedLocales.map((locale: any) => locale.toString());
  return localesAsStrings;
}

/**
 * Returns locales for given region id
 *
 * @param regionId Region id as integer or string
 * @return List of locales available in a specific region as array of strings
 */
export function getLocalesByRegionId(regionId: RegionIdAsNumberOrString) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getLocalesByRegionId()`);
  }

  return constants.LOCALES[regionIdAsString];
}

/**
 * Verifies whether locale matches regex pattern
 *
 * @param locale Locale name
 * @return true if locale matches the pattern, false if not
 */
export function checkIfLocaleLooksValid(locale:Locale) {
  const localeRegexPattern = /^(?:[a-z]{2}_[a-z]{2})$/gi;
  const doesLocaleLookValid = localeRegexPattern.test(locale);
  localeRegexPattern.lastIndex = 0;
  return doesLocaleLookValid;
}

/**
 * Validates locale name against locale list (whether it exists in the constants object)
 *
 * @param locale Locale name
 * @return true if locale exists, false if not. Throws RangeError if locale doesn't match regex pattern
 */
export function validateLocale(locale: Locale) {
  const doesLocaleLookValid = checkIfLocaleLooksValid(locale);

  if (!doesLocaleLookValid) {
    throw new RangeError(`${locale} is not a valid parameter for validateLocale()`);
  }

  const lowerCaseLocaleList = getAllLocaleNames().map(localeName => localeName.toLowerCase());
  const lowerCaseLocale = locale.toLowerCase();
  return lowerCaseLocaleList.includes(lowerCaseLocale);
}


/**
 * Checks whether given locale is available for a given region id
 *
 * @param locale Locale name
 * @param regionId Region id as integer or string
 * @return List of locales available in a specific region as array of strings
 */
// export function isLocaleValidForRegionId(locale: Locale, regionId: RegionIdAsNumberOrString) {
//   // const regionIdAsString = regionId.toString();
//   // const isRegionIdValid = validateRegionId(regionIdAsString);

//   // if (!isRegionIdValid) {
//   //   throw new RangeError(`${regionIdAsString} is not a valid parameter for getLocalesByRegionId()`);
//   // }

//   // return constants.LOCALES[regionIdAsString];
// }


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
