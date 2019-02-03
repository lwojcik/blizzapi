import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';

const { LOCALES, DEFAULT_LOCALES } = constants;
const { getDefaultLocaleNameForRegionId } = utils;

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

/* tslint:disable no-expression-statement */
describe('getDefaultLocaleNameForRegionId()', () => {
  test('should be defined', () => {
    expect(getDefaultLocaleNameForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getDefaultLocaleNameForRegionId).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId =>
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getDefaultLocaleNameForRegionId(regionId)).toBe(LOCALES[regionId][DEFAULT_LOCALES[regionId]]);
    }),
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    test(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
      expect(() => getDefaultLocaleNameForRegionId(wrongRegionId)).toThrow(RangeError);
    }),
  );
});
/* tslint:enable no-expression-statement */
