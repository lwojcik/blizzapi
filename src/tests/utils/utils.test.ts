import { BattleNetUtils } from '../../lib/utils';

const { getAllRegions, getAllRegionIds, getRegionNameById } = BattleNetUtils;

describe('BattleNetUtils', () => {
  test('should be defined', () => {
    expect(BattleNetUtils).toBeDefined();
  });

  test('should be of type "Object"', () => {
    expect(BattleNetUtils).toBeTruthy();
    expect(typeof BattleNetUtils).toBe('object');
  });

  test('should expose method getAllRegions()', () => {
    expect(getAllRegions).toBeDefined();
    expect(getAllRegions).toBeTruthy();
    expect(typeof getAllRegions).toBe('function');
  });

  test('should expose method getAllRegionIds()', () => {
    expect(getAllRegionIds).toBeDefined();
    expect(getAllRegionIds).toBeTruthy();
    expect(typeof getAllRegionIds).toBe('function');
  });

  test('should expose method getAllRegionNames()', () => {
    expect(getAllRegionIds).toBeDefined();
    expect(getAllRegionIds).toBeTruthy();
    expect(typeof getAllRegionIds).toBe('function');
  });

  test('should expose method getRegionNameById()', () => {
    expect(getRegionNameById).toBeDefined();
    expect(getRegionNameById).toBeTruthy();
    expect(typeof getRegionNameById).toBe('function');
  });

  test('should expose method validateRegionId()', () => {
    expect(getRegionNameById).toBeDefined();
    expect(getRegionNameById).toBeTruthy();
    expect(typeof getRegionNameById).toBe('function');
  });
});
