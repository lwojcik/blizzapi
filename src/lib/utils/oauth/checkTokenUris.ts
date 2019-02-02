import constants from '../../constants';
import { RegionIdOrName } from '../../types';
import { getUriByRegion } from '../common';

/**
 * Returns a list of all OAuth check token uris
 *
 * @return List of all OAuth check token uris indexed by region id as array of strings.
 */
export const getAllCheckTokenUris = () => constants.OAUTH_CHECK_TOKEN_URIS;

/**
 * Returns OAuth check token uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth check token uri as a string
 */
export const getCheckTokenUriByRegion = (regionIdOrName: RegionIdOrName) =>
  getUriByRegion(regionIdOrName, 'OAUTH_CHECK_TOKEN_URIS');
