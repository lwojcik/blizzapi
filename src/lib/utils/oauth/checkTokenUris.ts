import constants from '../../constants';
import { RegionIdOrName, RegionName, RegionIdAsNumberOrString } from '../../types';
import { getUriByRegionIdOrName, getUriByRegionId, getUriByRegionName } from '../common';

/**
 * Returns a list of all OAuth check token uris
 *
 * @return List of all OAuth check token uris indexed by region id as array of strings.
 */
export function getAllCheckTokenUris() {
  return constants.OAUTH_CHECK_TOKEN_URIS;
}

/**
 * Returns OAuth check token uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth check token uri as a string
 */
export function getCheckTokenUriByRegionIdOrName(regionIdOrName: RegionIdOrName) {
  return getUriByRegionIdOrName(regionIdOrName, 'OAUTH_CHECK_TOKEN_URIS');
}

/**
 * Returns OAuth check token uri for given region id
 *
 * @param regionId Region id as integer or string
 * @return OAuth check token uri as a string
 */
export function getCheckTokenUriByRegionId(regionId: RegionIdAsNumberOrString) {
  return getUriByRegionId(regionId, 'OAUTH_CHECK_TOKEN_URIS');
}

/**
 * Returns OAuth check token uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return OAuth check token uri as a string
 */
export function getCheckTokenUriByRegionName(regionName: RegionName) {
  return getUriByRegionName(regionName, 'OAUTH_CHECK_TOKEN_URIS');
}
