import constants from '../../constants';
import { RegionIdOrName } from '../../types';
import { getUriByRegion } from '../common';

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
export function getCheckTokenUriByRegion(regionIdOrName: RegionIdOrName) {
  return getUriByRegion(regionIdOrName, 'OAUTH_CHECK_TOKEN_URIS');
}
