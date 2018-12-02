import { BattleNetUtils } from '../../../../lib/utils';
import constants from '../../../../lib/constants';

const { REGIONS } = constants;

const { getAllRegionNames } = BattleNetUtils;

describe('getAllRegionNames()', () => {
  test('should be defined', () => {
    expect(getAllRegionNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegionNames).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionNames).toBeTruthy();
    expect(getAllRegionNames().constructor === Array).toBe(true);
  });

  test('number of returned elements should match length of constants.REGIONS values after flattening', () => {
    const flattenedRegionsLength = <number>([] as string[]).concat(...Object.values(REGIONS)).length;
    expect(getAllRegionNames().length).toStrictEqual(flattenedRegionsLength);
  });
});
