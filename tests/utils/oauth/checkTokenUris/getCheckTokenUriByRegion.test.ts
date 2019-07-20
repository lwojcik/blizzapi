import * as utils from '../../../../src/lib/utils';

const { getCheckTokenUriByRegion } = utils;

import regionNamesJson from '../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../__testData__/wrongRegionNames.json';
import regionIdsJson from '../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../__testData__/wrongRegionIds.json';

/* tslint:disable no-expression-statement */
describe('getCheckTokenUriByRegion()', () => {
  test('should be defined', () => {
    expect(getCheckTokenUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getCheckTokenUriByRegion).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<string | number>).forEach(regionId => {
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getCheckTokenUriByRegion(regionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach(wrongRegionId => {
    test(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
      expect(() => getCheckTokenUriByRegion(wrongRegionId)).toThrow(RangeError);
    });
  });

  (regionNamesJson as ReadonlyArray<string>).forEach(regionName => {
    test(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getCheckTokenUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName => {
    test(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getCheckTokenUriByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
/* tslint:enable no-expression-statement */
