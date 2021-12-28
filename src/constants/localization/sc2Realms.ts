/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-and-apis
 */

import {
  RegionIdProperties,
  Sc2RealmArray,
  Sc2Realm,
  RegionId,
} from "../../types";

export const sc2Realms: RegionIdProperties<Sc2RealmArray> = Object.freeze({
  [RegionId.us]: Object.freeze([Sc2Realm.US, Sc2Realm.LatAm]),
  [RegionId.eu]: Object.freeze([Sc2Realm.Europe, Sc2Realm.Russia]),
  [RegionId.kr]: Object.freeze([Sc2Realm.Korea, Sc2Realm.Taiwan]),
  [RegionId.cn]: Object.freeze([Sc2Realm.China]),
});
