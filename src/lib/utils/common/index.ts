import { ConstantKey, RegionIdOrName, RegionIdAsNumberOrString, RegionName } from '../../types';
import constants from '../../constants';
import { validateRegionId, validateRegionName, getRegionIdByName } from '../localization/regions';

export function getUriByRegionIdOrName(regionIdOrName:RegionIdOrName,constantKey:ConstantKey) {
  const itIsRegionId = validateRegionId(regionIdOrName);

  if (itIsRegionId) {
    return getUriByRegionId(regionIdOrName, constantKey)
  }

  return getUriByRegionName(regionIdOrName.toString(), constantKey);
}

export function getUriByRegionId(regionId: RegionIdAsNumberOrString, constantKey:ConstantKey) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for ${arguments.callee}()`);
  }

  return constants[constantKey][regionIdAsString];
}
  
/**
 * Returns OAuth check token uri for given region name
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @return OAuth check token uri as a string
 */
export function getUriByRegionName(regionName: RegionName, constantKey:ConstantKey) {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(`${regionName} is not a valid parameter for ${arguments.callee}()`);
  }

  const regionId = getRegionIdByName(regionName);

  return constants[constantKey][regionId];
}