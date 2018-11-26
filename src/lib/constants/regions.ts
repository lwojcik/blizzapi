// Via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization

// interface CONSTANT<Value> {
//   [regionId: string]: Value;
// }

const regions = {
  1: 'us',
  2: 'eu',
  3: ['kr', 'tw'],
  5: 'cn',
};

export default regions;
