import constants from '../../constants';
import { RegionIdOrName, RegionName, RegionIdAsNumberOrString } from '../../types';
import { getUriByRegionIdOrName, getUriByRegionId, getUriByRegionName } from '../common';

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
  return getUriByRegionIdOrName(regionIdOrName, 'OAUTH_AUTHORIZE_URIS');
}

/**
 * Returns OAuth authorize uri for given region id
 *
 * @param regionId Region id as integer or string
 * @return OAuth authorize uri as a string
 */
export function getAuthorizeUriByRegionId(regionId: RegionIdAsNumberOrString) {
  return getUriByRegionId(regionId, 'OAUTH_AUTHORIZE_URIS');
}

/**
 * Returns OAuth authorize uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return OAuth authorize uri as a string
 */
export function getAuthorizeUriByRegionName(regionName: RegionName) {
  return getUriByRegionName(regionName, 'OAUTH_AUTHORIZE_URIS');
}
