import constants from '../../constants';
import { validateRegionId } from './regions';
import { RegionIdAsNumberOrString, Sc2RealmAsNumberOrString } from '../../types';

/**
 * Returns a list of all available StarCraft II realms
 *
 * @return List of all available StarCraft II realms indexed by region id.
 */
export function getAllSc2Realms() {
  return constants.SC2_REALMS;
}

/**
 * Returns StarCraft II realms for given region id
 *
 * @param regionId Region id as integer or string
 * @return List of SC2 realms available in a specific region as array of integers
 */
export function getSc2RealmsByRegionId(regionId: RegionIdAsNumberOrString) {
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!isRegionIdValid) {
    throw new RangeError(`${regionIdAsString} is not a valid parameter for getSc2RealmsByRegionId()`);
  }

  return constants.SC2_REALMS[regionIdAsString];
}

/**
 * Verifies whether locale matches the regex pattern
 *
 * @param locale Locale name
 * @return true if locale matches the pattern, false if not
 */
export function checkIfSc2RealmLooksValid(sc2Realm: Sc2RealmAsNumberOrString) {
  const sc2RealmAsString = sc2Realm.toString();
  const sc2RealmRegexPattern = /^([1-9]{1})$/gi;
  const doesSc2RealmLookValid = sc2RealmRegexPattern.test(sc2RealmAsString);
  sc2RealmRegexPattern.lastIndex = 0;
  return doesSc2RealmLookValid;
}

/**
 * Checks whether given locale is available for a given region id
 *
 * @param sc2Realm SC2 realm id as integer (single digit)
 * @param regionId Region id as integer or string
 * @return List of locales available in a specific region as array of strings
 */
export function isSc2RealmValidForRegionId(sc2Realm: Sc2RealmAsNumberOrString, regionId: RegionIdAsNumberOrString) {
  const doesSc2RealmLookValid = checkIfSc2RealmLooksValid(sc2Realm);
  const regionIdAsString = regionId.toString();
  const isRegionIdValid = validateRegionId(regionIdAsString);

  if (!doesSc2RealmLookValid) {
    throw new RangeError(`${sc2Realm} is not a valid sc2Realm parameter for isSc2RealmValidForRegionId()`);
  }

  if (!isRegionIdValid) {
    throw new RangeError(`${regionId} is not a valid regionId parameter for isSc2RealmValidForRegionId()`);
  }

  const sc2RealmsForRegionId = getSc2RealmsByRegionId(regionId);
  const sc2RealmAsNumber = typeof sc2Realm === 'number' ? sc2Realm : parseInt(sc2Realm, 10);

  return sc2RealmsForRegionId.includes(sc2RealmAsNumber);
}