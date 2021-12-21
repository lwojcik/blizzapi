/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionIdProperties, Sc2RealmArray } from "../../types";

export const sc2Realms: RegionIdProperties<Sc2RealmArray> = Object.freeze({
  1: Object.freeze([1, 2]),
  2: Object.freeze([1, 2]),
  3: Object.freeze([1, 2]),
  5: Object.freeze([1]),
});
