import * as utils from '../../../../src/lib/utils';
const { getRegionIdByName } = utils;

import regionNamesJson from '../../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../../__testData__/wrongRegionNames.json';

describe('getRegionIdByName()', () => {
  test('should be defined', () => {
    expect(getRegionIdByName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getRegionIdByName).toBe('function');
  });

  (regionNamesJson as ReadonlyArray<string>).forEach(regionName =>
    test(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getRegionIdByName(regionName)).toMatchSnapshot();
    }),
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName =>
    test(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getRegionIdByName(wrongRegionName)).toThrow(RangeError);
    }),
  );
});
