import { constants } from "../../constants";
import { validateRegionId } from "./regions";
import { getAllLocales } from "./locales";
import {
  Locale,
  RegionIdAsNumberOrString,
  RegionIdAsString,
  RegionIdProperties,
  ConstantKey,
} from "../../types";

const defaultLocaleIndexes = constants[ConstantKey.DEFAULT_LOCALES];
const locales = constants[ConstantKey.LOCALES];

/**
 * Returns a list of all available default locale indexes
 *
 * @return List of all available default locale indexes indexed by region id.
 */
export const getAllDefaultLocaleIndexes = () => defaultLocaleIndexes;

/**
 * Returns a default locale index for given region id
 *
 * @param regionId Region id as number or string
 * @return Index of default locale for given region id
 */
export const getDefaultLocaleIndexForRegionId = (
  regionId: RegionIdAsNumberOrString
) => {
  const regionIdAsString = regionId.toString() as RegionIdAsString;
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getDefaultLocaleIndexForRegionId()`
    );
  }

  return defaultLocaleIndexes[regionIdAsString];
};

/**
 * Returns a default locale name for given region id
 *
 * @param regionId Region id as number or string
 * @return Name of the default locale for given region id
 */
export const getDefaultLocaleNameForRegionId = (
  regionId: RegionIdAsNumberOrString
) => {
  const regionIdAsString = regionId.toString() as RegionIdAsString;
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getDefaultLocaleNameForRegionId()`
    );
  }

  const defaultLocaleIndex = defaultLocaleIndexes[regionIdAsString];
  return locales[regionId][defaultLocaleIndex];
};

/**
 * Returns a list of all available default locale names
 *
 * @return List of all available default locale names indexed by region id.
 */
export const getAllDefaultLocaleNames = () => {
  const allLocales = getAllLocales();
  const allLocaleKeys = Object.keys(allLocales) as RegionIdAsString[];

  return <RegionIdProperties<Locale>>Object.assign(
    {},
    ...allLocaleKeys.map((regionId) => ({
      [regionId]: getDefaultLocaleNameForRegionId(regionId),
    }))
  );
};
