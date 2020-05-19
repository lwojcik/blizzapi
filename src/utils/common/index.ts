import constants from '../../constants';
import {
  validateRegionId,
  validateRegionName,
  getRegionIdByName,
} from '../localization/regions';
import {
  ConstantKey,
  RegionIdOrName,
  RegionIdAsNumberOrString,
  RegionName,
} from '../../types';

export const getConstantByRegion = (regionIdOrName: RegionIdOrName, constantKey: ConstantKey) => {
  return validateRegionId(regionIdOrName)
    ? getConstantByRegionId(regionIdOrName, constantKey)
    : getConstantByRegionName(regionIdOrName.toString(), constantKey);
};

export const getConstantByRegionId = (
  regionId: RegionIdAsNumberOrString,
  constantKey: ConstantKey,
) => {
  const regionIdAsString = typeof regionId !== 'string' ? regionId : regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  /* tslint:disable no-if-statement */
  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getConstantByRegionId(${regionId}, '${constantKey}')`,
    );
  }
  /* tslint:enable no-if-statement */
  return constants[constantKey][regionIdAsString];
};

/**
 * Returns uri for given region name from specified constant object
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @param constantKey Constant key
 * @return Uri as a string
 */
export const getConstantByRegionName = (regionName: RegionName, constantKey: ConstantKey) => {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(
      `${regionName} is not a valid parameter for getConstantByRegionName(${regionName}, '${constantKey}')`,
    );
  }

  const regionId = getRegionIdByName(regionName);

  return constants[constantKey][regionId];
};
