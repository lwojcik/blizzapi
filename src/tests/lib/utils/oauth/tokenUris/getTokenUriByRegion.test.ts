import * as utils from '../../../../../lib/utils';

const { getTokenUriByRegion } = utils;

import regionNamesJson from '../../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../../__testData__/wrongRegionNames.json';
import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

describe('getTokenUriByRegion()', () => {
  test('should be defined', () => {
    expect(getTokenUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getTokenUriByRegion).toBe('function');
  });

  (regionIdsJson as (string | number)[]).forEach(regionId => {
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getTokenUriByRegion(regionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as (string | number)[]).forEach(wrongRegionId => {
      test(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
        expect(() => getTokenUriByRegion(wrongRegionId)).toThrow(RangeError);
      });
    });

  (regionNamesJson as string[]).forEach(regionName => {
    test(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getTokenUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as string[]).forEach(wrongRegionName => {
    test(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getTokenUriByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
