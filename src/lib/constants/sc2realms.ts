/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import Constant from '../interfaces/Constant';

type Sc2RealmList = number[];

const sc2realms:Constant<Sc2RealmList> = {
  1: [1, 2],
  2: [1, 2],
  3: [1, 2],
  5: [1],
};

export default sc2realms;
