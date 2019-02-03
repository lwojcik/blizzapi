import { ConstantKey } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common/index';

const { getUriByRegion } = utils;

import regionNamesJson from '../../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../../__testData__/wrongRegionNames.json';
import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';
import constantKeysJson from '../../../../__testData__/constantKeys.json';

/* tslint:disable no-expression-statement */
describe('getUriByRegion()', () => {
  test('should be defined', () => {
    expect(getUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegion).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach(constantKey => {
      test(`should return correct value for ${regionId} and ${constantKey} as valid parameters`, () => {
        expect(getUriByRegion(regionId, constantKey)).toMatchSnapshot();
      });
    }),
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach(constantKey => {
      test('should throw RangeError for ${wrongRegionId} as invalid parameter', () => {
        expect(() => getUriByRegion(wrongRegionId, constantKey)).toThrow(RangeError);
      });
    }),
  );

  (regionNamesJson as ReadonlyArray<string>).forEach(regionName =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach(constantKey => {
      test(`should return correct value for ${regionName} as valid region name`, () => {
        expect(getUriByRegion(regionName, constantKey)).toMatchSnapshot();
      });
    }),
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach(constantKey => {
      test(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
        expect(() => getUriByRegion(wrongRegionName, constantKey)).toThrow(RangeError);
      });
    }),
  );
});
/* tslint:enable no-expression-statement */
