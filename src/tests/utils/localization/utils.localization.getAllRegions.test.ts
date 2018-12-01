import { BattleNetUtils } from '../../../lib/utils';
import constants from '../../../lib/constants';

const { getAllRegions } = BattleNetUtils;

describe('getAllRegions()', () => {
  test('should be defined', () => {
    expect(getAllRegions).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegions).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllRegions()).toBeTruthy();
    expect(typeof getAllRegions()).toBe('object');
  });

  test('returned object should match constants.REGIONS property', () => {
    expect(getAllRegions()).toMatchObject(constants.REGIONS);
  });
});
