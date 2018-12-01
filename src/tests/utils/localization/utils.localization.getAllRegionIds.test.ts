import { BattleNetUtils } from '../../../lib/utils';
import constants from '../../../lib/constants';

const { REGIONS } = constants;
const { getAllRegionIds } = BattleNetUtils;

describe('getAllRegionIds()', () => {
  test('should be defined', () => {
    expect(getAllRegionIds).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegionIds).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionIds()).toBeTruthy();
    expect(getAllRegionIds().constructor === Array).toBe(true);
  });

  test('number of returned elements should match constants.REGIONS length', () => {
    expect(getAllRegionIds().length).toStrictEqual(Object.keys(REGIONS).length);
  });

  test('returned array elements should be integers', () => {
    const isInteger = (element: any): boolean => typeof element === 'number';
    expect(getAllRegionIds().every(isInteger)).toBe(true);
  });
});
