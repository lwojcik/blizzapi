import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

const { getTokenUriByRegion } = utils;

describe('getTokenUriByRegion()', () => {
  test('should be defined', () => {
    expect(getTokenUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getTokenUriByRegion).toBe('function');
  });
});
