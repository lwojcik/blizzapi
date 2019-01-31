import * as utils from '../../../../lib/utils/common';
// import constants from '../../../../../lib/constants';

const { getUriByRegionId } = utils;

describe('getUriByRegionId()', () => {
  test('should be defined', () => {
    expect(getUriByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegionId).toBe('function');
  });

  // test('should return an object', () => {
  //   expect(typeof getUriByRegion()).toBeTruthy();
  //   expect(typeof getUriByRegion()).toBe('object');
  // });
});
