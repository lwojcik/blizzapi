// Via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization

import constant from '../interfaces/constant';

const regions:constant<string|string[]> = {
  1: 'us',
  2: 'eu',
  3: ['kr', 'tw'],
  5: 'cn',
};

export default regions;
