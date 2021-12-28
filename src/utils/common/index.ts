import { constants } from "../../constants";
import {
  validateRegionId,
  validateRegionName,
  getRegionIdByName,
} from "../localization/regions";
import {
  ConstantKey,
  RegionIdOrName,
  RegionIdAsNumberOrString,
  RegionName,
} from "../../types";

export const getConstantByRegionId = (
  regionId: RegionIdAsNumberOrString,
  constantKey: ConstantKey
) => {
  const regionIdAsString =
    typeof regionId === "string" ? regionId : regionId.toString();
  const isRegionIdValid = validateRegionId(
    regionIdAsString as RegionIdAsNumberOrString
  );

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionIdAsString} is not a valid parameter for getConstantByRegionId(${regionId}, '${constantKey}')`
    );
  }
  return constants[constantKey][regionId];
};

/**
 * Returns constant value for given region name from specified constant object
 *
 * @param regionName Region name as two-letter string (e.g. 'us')
 * @param constantKey Constant key
 * @return Uri as a string
 */
export const getConstantByRegionName = (
  regionName: RegionName,
  constantKey: ConstantKey
) => {
  const isRegionNameValid = validateRegionName(regionName);

  if (!isRegionNameValid) {
    throw new RangeError(
      `${regionName} is not a valid parameter for getConstantByRegionName(${regionName}, '${constantKey}')`
    );
  }

  const regionId = getRegionIdByName(regionName);

  return constants[constantKey][regionId];
};

export const getConstantByRegion = (
  regionIdOrName: RegionIdOrName,
  constantKey: ConstantKey
) =>
  validateRegionId(regionIdOrName as RegionIdAsNumberOrString)
    ? getConstantByRegionId(
        regionIdOrName as RegionIdAsNumberOrString,
        constantKey
      )
    : getConstantByRegionName(
        regionIdOrName.toString() as RegionName,
        constantKey
      );
