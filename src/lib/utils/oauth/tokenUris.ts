import constants from '../../constants';
import { validateRegionId, validateRegionName, getRegionIdByName } from '../localization/regions';
import { RegionName, RegionIdAsNumberOrString } from '../../types';

/**
 * Returns a list of all OAuth token uris
 *
 * @return List of all OAuth token uris indexed by region id as array of strings.
 */
export function getAllTokenUris() {
  return constants.OAUTH_TOKEN_URIS;
}

/**
 * Returns OAuth token uri for given region id
 *
 * @param regionId Region id as integer or string
 * @return OAuth token uri as a string
 */
export function getTokenUriByRegionId(regionId: RegionIdAsNumberOrString) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getTokenUriByRegionId()`);
  }

  return constants.OAUTH_TOKEN_URIS[regionIdAsString];
}

/**
 * Returns OAuth check token uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return OAuth check token uri as a string
 */
export function getTokenUriByRegionName(regionName: RegionName) {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(`${regionName} is not a valid parameter for getTokenUriByRegionName()`);
  }

  const regionId = getRegionIdByName(regionName)

  return constants.OAUTH_TOKEN_URIS[regionId];
}
