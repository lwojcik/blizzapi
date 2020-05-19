import * as utils from '../../../../../src/utils';

const { getApiHostByRegion } = utils;

import regionNamesJson from '../../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../../__testData__/wrongRegionNames.json';
import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

describe('getApiHostByRegion()', () => {
  test('should be defined', () => {
    expect(getApiHostByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getApiHostByRegion).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<string | number>).forEach((regionId) => {
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getApiHostByRegion(regionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach((wrongRegionId) => {
    test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
      expect(() => getApiHostByRegion(wrongRegionId)).toThrow(RangeError);
    });
  });

  (regionNamesJson as ReadonlyArray<string>).forEach((regionName) => {
    test(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getApiHostByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) => {
    test('should throw RangeError for ${wrongRegionName} as invalid region name', () => {
      expect(() => getApiHostByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
