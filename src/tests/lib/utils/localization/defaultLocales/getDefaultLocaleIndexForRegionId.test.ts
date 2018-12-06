import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

// const { DEFAULT_LOCALES } = constants;
const { getDefaultLocaleIndexForRegionId } = utils;

describe('getDefaultLocaleIndexForRegionId()', () => {
  test('should be defined', () => {
    expect(getDefaultLocaleIndexForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getDefaultLocaleIndexForRegionId).toBe('function');
  });
});
