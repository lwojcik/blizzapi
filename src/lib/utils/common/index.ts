import { ConstantKey, RegionIdOrName, RegionIdAsNumberOrString, RegionName } from '../../types';
import constants from '../../constants';
import { validateRegionId, validateRegionName, getRegionIdByName } from '../localization/regions';

export const getConstantByRegion = (regionIdOrName: RegionIdOrName, constantKey: ConstantKey) => {
  const validRegionId = validateRegionId(regionIdOrName);

  /* tslint:disable no-if-statement */
  if (validRegionId) {
    return getConstantByRegionId(regionIdOrName, constantKey);
  }
  /* tslint:enable no-if-statement */

  return getConstantByRegionName(regionIdOrName.toString(), constantKey);
};

export const getConstantByRegionId = (regionId: RegionIdAsNumberOrString, constantKey: ConstantKey) => {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  /* tslint:disable no-if-statement */
  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getUriByRegionId(${regionId}, '${constantKey}')`,
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

  /* tslint:disable no-if-statement */
  if (!isRegionNameValid) {
    throw new RangeError(
      `${regionName} is not a valid parameter for getConstantByRegionName(${regionName}, '${constantKey}')`,
    );
  }
  /* tslint:enable no-if-statement */

  const regionId = getRegionIdByName(regionName);

  return constants[constantKey][regionId];
};
