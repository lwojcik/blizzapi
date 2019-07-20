import * as utils from '../../../../src/lib/utils';

const { getTokenUriByRegion } = utils;

import regionNamesJson from '../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../__testData__/wrongRegionNames.json';
import regionIdsJson from '../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../__testData__/wrongRegionIds.json';

/* tslint:disable no-expression-statement */
describe('getTokenUriByRegion()', () => {
  test('should be defined', () => {
    expect(getTokenUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getTokenUriByRegion).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<string | number>).forEach(regionId => {
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getTokenUriByRegion(regionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach(wrongRegionId => {
    test(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
      expect(() => getTokenUriByRegion(wrongRegionId)).toThrow(RangeError);
    });
  });

  (regionNamesJson as ReadonlyArray<string>).forEach(regionName => {
    test(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getTokenUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName => {
    test(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getTokenUriByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
/* tslint:enable no-expression-statement */
