import { BattleNetUtils } from '../../lib/utils';

const {
  getAllRegions,
  getAllRegionIds,
  getAllRegionNames,
  getRegionNameById,
  validateRegionId,
  getRegionIdByName,
  validateRegionName,
} = BattleNetUtils;

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
    expect(getAllRegionNames).toBeDefined();
    expect(getAllRegionNames).toBeTruthy();
    expect(typeof getAllRegionNames).toBe('function');
  });

  test('should expose method getRegionNameById()', () => {
    expect(getRegionNameById).toBeDefined();
    expect(getRegionNameById).toBeTruthy();
    expect(typeof getRegionNameById).toBe('function');
  });

  test('should expose method validateRegionId()', () => {
    expect(validateRegionId).toBeDefined();
    expect(validateRegionId).toBeTruthy();
    expect(typeof validateRegionId).toBe('function');
  });

  test('should expose method getRegionIdByName()', () => {
    expect(getRegionIdByName).toBeDefined();
    expect(getRegionIdByName).toBeTruthy();
    expect(typeof getRegionIdByName).toBe('function');
  });

  test('should expose method validateRegionName()', () => {
    expect(validateRegionName).toBeDefined();
    expect(validateRegionName).toBeTruthy();
    expect(typeof validateRegionName).toBe('function');
  });
});
