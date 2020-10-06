import * as utils from '../../../../../src/utils';
import constants from '../../../../../src/constants';

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

const { DEFAULT_LOCALES } = constants;
const { getDefaultLocaleIndexForRegionId } = utils;

describe('getDefaultLocaleIndexForRegionId()', () => {
  it('should be defined', () => {
    expect(getDefaultLocaleIndexForRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getDefaultLocaleIndexForRegionId).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) => {
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getDefaultLocaleIndexForRegionId(regionId)).toBe(DEFAULT_LOCALES[regionId]);
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach((wrongRegionId) =>
    it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
      expect(() => getDefaultLocaleIndexForRegionId(wrongRegionId)).toThrow(RangeError);
    }));
});
