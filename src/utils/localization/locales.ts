import { constants } from "../../constants";
import { validateRegionId } from "./regions";
import { getConstantByRegionId } from "../common";
import {
  Locale,
  LocaleArray,
  RegionIdAsString,
  RegionIdAsNumberOrString,
  ConstantKey,
} from "../../types";

const locales = constants[ConstantKey.LOCALES];

/**
 * Returns a list of all locales indexed by region id
 *
 * @return List of all available regions indexed by region id as array of strings.
 */
export const getAllLocales = () => locales;

/**
 * Returns a list of all available locale names
 *
 * @return List of all available locales as flat array of strings.
 */
export const getAllLocaleNames = () => {
  const flattenedLocales = Object.keys(Locale).filter((item) =>
    Number.isNaN(Number(item))
  );
  // const flattenedLocales = ([] as LocaleArray).concat(Object.values(locales));
  const localesAsStrings = flattenedLocales.map((locale: string) =>
    locale.toString()
  );
  return localesAsStrings;
};

/**
 * Returns locales for given region id
 *
 * @param regionId Region id as integer or string
 * @return List of locales available in a specific region as array of strings
 */
export const getLocalesByRegionId = (regionId: RegionIdAsNumberOrString) =>
  <LocaleArray>getConstantByRegionId(regionId, ConstantKey.LOCALES);

/**
 * Verifies whether locale matches the regex pattern
 *
 * @param locale Locale name
 * @return true if locale matches the pattern, false if not
 */
export const checkIfLocaleLooksValid = (locale: Locale) => {
  const localeRegexPattern = /^(?:[a-z]{2}_[a-z]{2})$/gi;
  const doesLocaleLookValid = localeRegexPattern.test(locale);
  return doesLocaleLookValid;
};

/**
 * Validates locale name against locale list (whether it exists in the constants object)
 *
 * @param locale Locale name
 * @return true if locale exists, false if not.
 * Throws RangeError if locale doesn't match regex pattern
 */
export const validateLocale = (locale: Locale) => {
  const doesLocaleLookValid = checkIfLocaleLooksValid(locale);

  if (!doesLocaleLookValid) {
    throw new RangeError(
      `${locale} is not a valid parameter for validateLocale()`
    );
  }

  const lowerCaseLocaleList = getAllLocaleNames().map((localeName: string) =>
    localeName.toLowerCase()
  );
  const lowerCaseLocale = locale.toLowerCase();
  return lowerCaseLocaleList.includes(lowerCaseLocale);
};

/**
 * Checks whether given locale is available for a given region id
 *
 * @param locale Locale name
 * @param regionId Region id as integer or string
 * @return true or false
 */
export const isLocaleValidForRegionId = (
  locale: Locale,
  regionId: RegionIdAsNumberOrString
) => {
  const lowerCaseLocale = locale.toLowerCase() as Locale;
  const doesLocaleLookValid = validateLocale(lowerCaseLocale) || false;
  const regionIdAsString = regionId.toString() as RegionIdAsString;
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!doesLocaleLookValid) {
    throw new RangeError(
      `${locale} is not a valid locale parameter for isLocaleValidForRegionId()`
    );
  }

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionId} is not a valid regionId parameter for isLocaleValidForRegionId()`
    );
  }

  const localesForRegionId = getLocalesByRegionId(regionId).map(
    (localeName: string) => localeName.toLowerCase()
  );
  return localesForRegionId.includes(lowerCaseLocale);
};
