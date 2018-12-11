/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { IRegionIdProperties } from '../../interfaces';
import { Sc2RealmList } from '../../types';

const sc2realms: IRegionIdProperties<Sc2RealmList> = Object.freeze({
  1: Object.freeze([1, 2]),
  2: Object.freeze([1, 2]),
  3: Object.freeze([1, 2]),
  5: Object.freeze([1]),
});

export default sc2realms;
