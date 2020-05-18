/**
 * List of all available StarCraft II realm IDs for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import deepFreeze from '../../../utils/deepFreeze/deepFreeze';

const sc2Realms = deepFreeze({
  1: [1, 2],
  2: [1, 2],
  3: [1, 2],
  5: [1],
});

export default sc2Realms;
