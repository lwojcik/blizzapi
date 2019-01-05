import constants from '../../constants';
import { validateRegionId, validateRegionName, getRegionIdByName } from '../localization/regions';
import { RegionIdOrName, RegionName, RegionIdAsNumberOrString } from '../../types';

/**
 * Returns a list of all OAuth authorize uris
 *
 * @return List of all OAuth authorize uris indexed by region id as array of strings.
 */
export function getAllAuthorizeUris() {
  return constants.OAUTH_AUTHORIZE_URIS;
}

/**
 * Returns OAuth authorize uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth authorize uri as a string
 */
export function getAuthorizeUriByRegionIdOrName(regionIdOrName: RegionIdOrName) {
  const itIsRegionId = validateRegionId(regionIdOrName);
  
  if (itIsRegionId) {
    return getAuthorizeUriByRegionId(regionIdOrName);
  }

  return getAuthorizeUriByRegionName(regionIdOrName.toString());
}

/**
 * Returns OAuth authorize uri for given region id
 *
 * @param regionId Region id as integer or string
 * @return OAuth authorize uri as a string
 */
export function getAuthorizeUriByRegionId(regionId: RegionIdAsNumberOrString) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getAuthorizeUriByRegionId()`);
  }

  return constants.OAUTH_AUTHORIZE_URIS[regionIdAsString];
}

/**
 * Returns OAuth authorize uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return OAuth authorize uri as a string
 */
export function getAuthorizeUriByRegionName(regionName: RegionName) {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(`${regionName} is not a valid parameter for getAuthorizeUriByRegionName()`);
  }

  const regionId = getRegionIdByName(regionName)

  return constants.OAUTH_AUTHORIZE_URIS[regionId];
}
