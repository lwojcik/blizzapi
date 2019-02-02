import constants from '../../constants';
import { RegionIdOrName } from '../../types';
import { getUriByRegion } from '../common';

/**
 * Returns a list of all OAuth authorize uris
 *
 * @return List of all OAuth authorize uris indexed by region id as array of strings.
 */
export const getAllAuthorizeUris = () => constants.OAUTH_AUTHORIZE_URIS;

/**
 * Returns OAuth authorize uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth authorize uri as a string
 */
export const getAuthorizeUriByRegion = (regionIdOrName: RegionIdOrName) =>
  getUriByRegion(regionIdOrName, 'OAUTH_AUTHORIZE_URIS');
