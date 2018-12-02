/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import '../../interfaces';
import '../../types';

const sc2realms: Interfaces.IRegionIdProperties<Types.Sc2RealmList> = {
  1: [1, 2],
  2: [1, 2],
  3: [1, 2],
  5: [1],
};

export default sc2realms;
