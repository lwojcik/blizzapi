import constants from '../../constants';
import { RegionIdOrName } from '../../types';
import { getUriByRegion } from '../common';

/**
 * Returns a list of all OAuth token uris
 *
 * @return List of all OAuth token uris indexed by region id as array of strings.
 */
export function getAllTokenUris() {
  return constants.OAUTH_TOKEN_URIS;
}

/**
 * Returns OAuth token uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth token uri as a string
 */
export function getTokenUriByRegion(regionIdOrName: RegionIdOrName) {
  return getUriByRegion(regionIdOrName, 'OAUTH_TOKEN_URIS');
}
