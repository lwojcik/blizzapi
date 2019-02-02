import * as utils from '../../../../../lib/utils';
const { getAuthorizeUriByRegion } = utils;

import regionNamesJson from '../../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../../__testData__/wrongRegionNames.json';
import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

describe('getAuthorizeUriByRegion()', () => {
  test('should be defined', () => {
    expect(getAuthorizeUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAuthorizeUriByRegion).toBe('function');
  });

  (regionIdsJson as (string | number)[]).forEach(regionId => {
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getAuthorizeUriByRegion(regionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as (string | number)[]).forEach(wrongRegionId => {
    test(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
      expect(() => getAuthorizeUriByRegion(wrongRegionId)).toThrow(RangeError);
    });
  });

  (regionNamesJson as string[]).forEach(regionName => {
    test(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getAuthorizeUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as string[]).forEach(wrongRegionName => {
    test(`should throw RangeError for invalid region name`, () => {
      expect(() => getAuthorizeUriByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
