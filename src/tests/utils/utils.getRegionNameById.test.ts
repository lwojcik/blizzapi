import { BattleNetUtils } from '../../lib/utils';
// import constants from '../../constants/constants';

// const { REGIONS } = constants;

const { getRegionNameById } = BattleNetUtils;

describe('getRegionNameById()', () => {
  test('should be defined', () => {
    expect(getRegionNameById).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getRegionNameById).toBe('function');
  });

  // test('should return "us" string literal for region id 1', () => {
  //   expect(getRegionNameById(1)).toEqual('us');
  // });

  // test('should return "us" string literal for region id 1', () => {
  //   expect(getRegionNameById(2)).toEqual('us');
  // });

  // test('should return "us" string literal for region id 1', () => {
  //   expect(getRegionNameById(3)).toEqual('us');
  // });

  // test('should return "us" string literal for region id 1', () => {
  //   expect(getRegionNameById(1)).toEqual('us');
  // });

  // test('should return "us" string literal for region id 1', () => {
  //   expect(getRegionNameById(1)).toEqual('us');
  // });

  // test('should throw RangeError for invalid region id', () => {
  //   expect(getRegionNameById())
  // })
});
