/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { IRegionIdProperties } from '../../interfaces';
import { Sc2RealmList } from '../../types';

const sc2realms: IRegionIdProperties<Sc2RealmList> = {
  1: [1, 2],
  2: [1, 2],
  3: [1, 2],
  5: [1],
};

Object.preventExtensions(sc2realms);

export default sc2realms;
