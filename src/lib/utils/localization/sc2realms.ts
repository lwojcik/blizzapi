import constants from '../../constants';
import { validateRegionId } from './regions';
import { RegionIdAsNumberOrString, Locale } from '../../types';

/**
 * Returns a list of all available StarCraft II realms
 *
 * @return List of all available StarCraft II realms indexed by region id.
 */
export function getAllSc2Realms() {
  return constants.SC2_REALMS;
}

/**
 * Returns StarCraft II realms for given region id
 *
 * @param regionId Region id as integer or string
 * @return List of SC2 realms available in a specific region as array of integers
 */
export function getSc2RealmsByRegionId(regionId: RegionIdAsNumberOrString) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getLocalesByRegionId()`);
  }

  return constants.SC2_REALMS[regionIdAsString];
}

/**
 * Verifies whether locale matches the regex pattern
 *
 * @param locale Locale name
 * @return true if locale matches the pattern, false if not
 */
export function checkIfSc2RealmLooksValid(locale: Locale) {
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
export function validateSc2Realm(locale: Locale) {
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
export function isSc2RealmValidForRegionId(locale: Locale, regionId: RegionIdAsNumberOrString) {
  const lowerCaseLocale = locale.toLowerCase();
  const doesLocaleLookValid = validateSc2Realm(lowerCaseLocale) || false;
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!doesLocaleLookValid) {
    throw new RangeError(`${locale} is not a valid locale parameter for isLocaleValidForRegionId()`);
  }

  if (!isRegionIdValid) {
    throw new RangeError(`${regionId} is not a valid regionId parameter for isLocaleValidForRegionId()`);
  }

  const localesForRegionId = getSc2RealmsByRegionId(regionId).map(sc2realm => localeName.toLowerCase());
  return localesForRegionId.includes(lowerCaseLocale);
}