import * as utils from '../../../../../src/lib/utils';
import constants from '../../../../../src/lib/constants';

const { DEFAULT_LOCALES } = constants;
const { getDefaultLocaleIndexForRegionId } = utils;

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

/* tslint:disable no-expression-statement */
describe('getDefaultLocaleIndexForRegionId()', () => {
  test('should be defined', () => {
    expect(getDefaultLocaleIndexForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getDefaultLocaleIndexForRegionId).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId => {
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getDefaultLocaleIndexForRegionId(regionId)).toBe(DEFAULT_LOCALES[regionId]);
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    test(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
      expect(() => getDefaultLocaleIndexForRegionId(wrongRegionId)).toThrow(RangeError);
    }),
  );
});
/* tslint:enable no-expression-statement */
