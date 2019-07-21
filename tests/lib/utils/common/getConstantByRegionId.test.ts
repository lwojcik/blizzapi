import { RegionIdArray, ConstantKeys } from '../../../../@types';
import * as utils from '../../../../src/lib/utils/common';

import regionIdsJson from '../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../__testData__/wrongRegionIds.json';
import constantKeysJson from '../../../__testData__/constantKeys.json';

const { getConstantByRegionId } = utils;

describe('getUriByRegionId()', () => {
  test('should be defined', () => {
    expect(getConstantByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getConstantByRegionId).toBe('function');
  });

  (regionIdsJson as RegionIdArray).forEach(regionId => {
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test(`should return correct value for ${regionId} and ${constantKey} as valid parameters`, () => {
        expect(getConstantByRegionId(regionId, constantKey)).toMatchSnapshot();
      });
    });
  });

  (wrongRegionIdsJson as RegionIdArray).forEach(wrongRegionId => {
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
        expect(() => getConstantByRegionId(wrongRegionId, constantKey)).toThrow(RangeError);
      });
    });
  });
});