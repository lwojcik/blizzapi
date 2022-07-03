/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-and-apis
 */

import {
  RegionIdProperties,
  Sc2RealmArray,
  Sc2Realm,
  RegionIdEnum,
} from "../../types";

export const sc2Realms: RegionIdProperties<Sc2RealmArray> = Object.freeze({
  [RegionIdEnum.us]: Object.freeze([Sc2Realm.US, Sc2Realm.LatAm]),
  [RegionIdEnum.eu]: Object.freeze([Sc2Realm.Europe, Sc2Realm.Russia]),
  [RegionIdEnum.kr]: Object.freeze([Sc2Realm.Korea, Sc2Realm.Taiwan]),
  [RegionIdEnum.cn]: Object.freeze([Sc2Realm.China]),
});
