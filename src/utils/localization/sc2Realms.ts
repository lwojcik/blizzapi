import { constants } from "../../constants";
import { validateRegionId } from "./regions";
import { getConstantByRegionId } from "../common";
import {
  RegionIdAsNumberOrString,
  Sc2RealmAsNumberOrString,
  Sc2RealmList,
  ConstantKey,
  RegionIdAsString,
} from "../../types";

/**
 * Returns a list of all available StarCraft II realms
 *
 * @return List of all available StarCraft II realms indexed by region id.
 */
export const getAllSc2Realms = () => constants.SC2_REALMS;

/**
 * Returns a list of all SC2 realms
 *
 * @return List of all available SC2 realms as flat array of integers.
 */
export const getAllAvailableSc2Realms = (): Sc2RealmList => {
  const sc2Realms = Object.values(constants.SC2_REALMS);
  const flattenedSc2Realms = ([] as Sc2RealmList).concat(...sc2Realms);
  return flattenedSc2Realms.filter((el, i, a) => i === a.indexOf(el));
};

/**
 * Returns StarCraft II realms for given region id
 *
 * @param regionId Region id as integer or string
 * @return List of SC2 realms available in a specific region as array of integers
 */
export const getSc2RealmsByRegionId = (regionId: RegionIdAsNumberOrString) =>
  <Sc2RealmList>getConstantByRegionId(regionId, ConstantKey.SC2_REALMS);

/**
 * Verifies whether locale matches the regex pattern
 *
 * @param locale Locale name
 * @return true if locale matches the pattern, false if not
 */
export const checkIfSc2RealmLooksValid = (
  sc2Realm: Sc2RealmAsNumberOrString
) => {
  const sc2RealmAsString = sc2Realm.toString();
  const sc2RealmRegexPattern = /^([1-9]{1})$/gi;
  const doesSc2RealmLookValid = sc2RealmRegexPattern.test(sc2RealmAsString);
  return doesSc2RealmLookValid;
};

/**
 * Validates sc2 realm id against SC2 realms list (whether it exists in the constants object)
 *
 * @param sc2Realm SC2 realm id (single digit) as number or string
 * @return true if locale exists, false if not.
 * Throws RangeError if locale doesn't match regex pattern
 */
export const validateSc2Realm = (sc2Realm: Sc2RealmAsNumberOrString) => {
  const doesSc2RealmLookValid = checkIfSc2RealmLooksValid(sc2Realm);

  if (!doesSc2RealmLookValid) {
    throw new RangeError(
      `${sc2Realm} is not a valid parameter for validateSc2Realm()`
    );
  }

  const sc2RealmList = getAllAvailableSc2Realms();
  const sc2RealmAsNumber =
    typeof sc2Realm === "number" ? sc2Realm : parseInt(sc2Realm, 10);
  return sc2RealmList.includes(sc2RealmAsNumber);
};

/**
 * Checks whether given locale is available for a given region id
 *
 * @param sc2Realm SC2 realm id as integer (single digit)
 * @param regionId Region id as integer or string
 * @return List of locales available in a specific region as array of strings
 */
export const isSc2RealmValidForRegionId = (
  sc2Realm: Sc2RealmAsNumberOrString,
  regionId: RegionIdAsNumberOrString
) => {
  const doesSc2RealmLookValid = checkIfSc2RealmLooksValid(sc2Realm);
  const regionIdAsString = regionId.toString() as RegionIdAsString;
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!doesSc2RealmLookValid) {
    throw new RangeError(
      `${sc2Realm} is not a valid sc2Realm parameter for isSc2RealmValidForRegionId()`
    );
  }

  if (!isRegionIdValid) {
    throw new RangeError(
      `${regionId} is not a valid regionId parameter for isSc2RealmValidForRegionId()`
    );
  }

  const sc2RealmsForRegionId = getSc2RealmsByRegionId(regionId);
  const sc2RealmAsNumber =
    typeof sc2Realm === "number" ? sc2Realm : parseInt(sc2Realm, 10);

  return sc2RealmsForRegionId.includes(sc2RealmAsNumber);
};
