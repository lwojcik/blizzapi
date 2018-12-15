import constants from '../../constants';
import { validateRegionId, validateRegionName, getRegionIdByName } from '../localization/regions';
import { RegionName, RegionIdAsNumberOrString } from '../../types';

/**
 * Returns a list of all region API host uris
 *
 * @return List of all API host uris indexed by region id as array of strings.
 */
export function getAllApiHosts() {
  return constants.REGION_API_HOSTS;
}

/**
 * Returns region API host uri for given region id
 *
 * @param regionId Region id as integer or string
 * @return List of locales available in a specific region as array of strings
 */
export function getApiHostByRegionId(regionId: RegionIdAsNumberOrString) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getLocalesByRegionId()`);
  }

  return constants.REGION_API_HOSTS[regionIdAsString];
}

/**
 * Returns region API host uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return List of locales available in a specific region as array of strings
 */
export function getApiHostByRegionName(regionName: RegionName) {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(`${regionName} is not a valid parameter for getApiHostByRegionName()`);
  }

  const regionId = getRegionIdByName(regionName)

  return constants.REGION_API_HOSTS[regionId];
}
