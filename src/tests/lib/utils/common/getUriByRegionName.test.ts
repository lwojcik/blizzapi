import * as utils from '../../../../lib/utils/common';
// import constants from '../../../../../lib/constants';

const { getUriByRegionName } = utils;

describe('getUriByRegionName()', () => {
  test('should be defined', () => {
    expect(getUriByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegionName).toBe('function');
  });

  // test('should return an object', () => {
  //   expect(typeof getUriByRegion()).toBeTruthy();
  //   expect(typeof getUriByRegion()).toBe('object');
  // });
});
