import { ConstantKey, RegionIdOrName, RegionIdAsNumberOrString, RegionName, Uri } from '../../types';
import constants from '../../constants';
import { validateRegionId, validateRegionName, getRegionIdByName } from '../localization/regions';

export function getUriByRegion(regionIdOrName:RegionIdOrName, constantKey:ConstantKey) {
  const validRegionId = validateRegionId(regionIdOrName);

  if (validRegionId) {
    return getUriByRegionId(regionIdOrName, constantKey)
  }

  return getUriByRegionName(regionIdOrName.toString(), constantKey);
}

export function getUriByRegionId(regionId: RegionIdAsNumberOrString, constantKey:ConstantKey) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getUriByRegionId(${regionId}, '${constantKey}')`);
  }

  return <Uri>constants[constantKey][regionIdAsString];
}
  
/**
 * Returns uri for given region name from specified constant object
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @param constantKey Constant key
 * @return Uri as a string
 */
export function getUriByRegionName(regionName: RegionName, constantKey:ConstantKey) {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(`${regionName} is not a valid parameter for getUriByRegionName(${regionName}, '${constantKey}')`);
  }

  const regionId = getRegionIdByName(regionName);

  return <Uri>constants[constantKey][regionId];
}