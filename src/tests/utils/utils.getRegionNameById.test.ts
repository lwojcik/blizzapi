import utils from '../../lib/utils';
// import constants from '../../constants/constants';

// const { REGIONS } = constants;

const { getRegionNameById } = utils;

describe('getRegionNameById()', () => {
  test('should be defined', () => {
    expect(getRegionNameById).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getRegionNameById).toBe('function');
  });

  // test('should throw RangeError for invalid region id', () => {
  //   expect(getRegionNameById())
  // })
});
