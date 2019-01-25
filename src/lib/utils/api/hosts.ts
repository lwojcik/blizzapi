import constants from '../../constants';
import { RegionIdOrName, RegionName, RegionIdAsNumberOrString } from '../../types';
import { getUriByRegionIdOrName, getUriByRegionId, getUriByRegionName } from '../common';

/**
 * Returns a list of all region API host uris
 *
 * @return List of all API host uris indexed by region id as array of strings.
 */
export function getAllApiHosts() {
  return constants.REGION_API_HOSTS;
}

/**
 * Returns region API host uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return Region API host uri as a string
 */
export function getApiHostByRegionIdOrRegionName(regionIdOrName: RegionIdOrName) {
  return getUriByRegionIdOrName(regionIdOrName, 'REGION_API_HOSTS');
}

/**
 * Returns region API host uri for given region id
 *
 * @param regionId Region id as integer or string
 * @return API host uri as a string
 */
export function getApiHostByRegionId(regionId: RegionIdAsNumberOrString) {
  return getUriByRegionId(regionId, 'REGION_API_HOSTS');
}

/**
 * Returns region API host uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return API host uri as a string
 */
export function getApiHostByRegionName(regionName: RegionName) {
  return getUriByRegionName(regionName, 'REGION_API_HOSTS');
}
