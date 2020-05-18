import { RegionIdOrName } from '../../../../types';
import { getConstantByRegion } from '../../../common';

/**
 * Returns region API host uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return Region API host uri as a string
 */
const getApiHostByRegion = (regionIdOrName: RegionIdOrName) => {
  const apiHost = getConstantByRegion(regionIdOrName, 'REGION_API_HOSTS');
  const regionNameIs = (name: string) =>
    typeof regionIdOrName === 'string'
      && (regionIdOrName as string).toLowerCase() === name;
  
  return regionNameIs('kr')
    ? apiHost[0]
      : regionNameIs('tw')
      ? apiHost[1]
      : apiHost;
};

export default getApiHostByRegion;
