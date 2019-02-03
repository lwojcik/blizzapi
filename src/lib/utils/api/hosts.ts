import constants from '../../constants';
import { RegionIdOrName } from '../../types';
import { getUriByRegion } from '../common';

/**
 * Returns a list of all region API host uris
 *
 * @return List of all API host uris indexed by region id as array of strings.
 */
export const getAllApiHosts = () => constants.REGION_API_HOSTS;

/**
 * Returns region API host uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return Region API host uri as a string
 */
export const getApiHostByRegion = (regionIdOrName: RegionIdOrName) =>
  getUriByRegion(regionIdOrName, 'REGION_API_HOSTS');
