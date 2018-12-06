import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

// const { DEFAULT_LOCALES } = constants;
const { getDefaultLocaleNameForRegionId } = utils;

describe('getDefaultLocaleNameForRegionId()', () => {
  test('should be defined', () => {
    expect(getDefaultLocaleNameForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getDefaultLocaleNameForRegionId).toBe('function');
  });
});
