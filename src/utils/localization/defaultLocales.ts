import { constants } from '../../constants';
import { validateRegionId } from './regions';
import { getAllLocales } from './locales';
import {
  Locale,
  RegionIdAsNumberOrString,
  RegionIdProperties,
} from '../../types';

/**
 * Returns a list of all available default locale indexes
 *
 * @return List of all available default locale indexes indexed by region id.
 */
export const getAllDefaultLocaleIndexes = () => constants.DEFAULT_LOCALES;

/**
 * Returns a default locale index for given region id
 *
 * @param regionId Region id as number or string
 * @return Index of default locale for given region id
 */
export const getDefaultLocaleIndexForRegionId = (regionId: RegionIdAsNumberOrString) => {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getDefaultLocaleIndexForRegionId()`,
    );
  }

  return constants.DEFAULT_LOCALES[regionIdAsString];
};

/**
 * Returns a default locale name for given region id
 *
 * @param regionId Region id as number or string
 * @return Name of the default locale for given region id
 */
export const getDefaultLocaleNameForRegionId = (regionId: RegionIdAsNumberOrString) => {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getDefaultLocaleNameForRegionId()`,
    );
  }

  const defaultLocaleIndex = constants.DEFAULT_LOCALES[regionIdAsString];
  return constants.LOCALES[regionId][defaultLocaleIndex];
};

/**
 * Returns a list of all available default locale names
 *
 * @return List of all available default locale names indexed by region id.
 */
export const getAllDefaultLocaleNames = () => {
  const allLocales = getAllLocales();
  const allLocaleKeys = Object.keys(allLocales);

  return <RegionIdProperties<Locale>>Object.assign(
    {},
    ...allLocaleKeys.map(regionId => ({
      [regionId]: getDefaultLocaleNameForRegionId(regionId),
    })),
  );
};
