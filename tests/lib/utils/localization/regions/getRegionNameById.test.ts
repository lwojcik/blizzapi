import * as utils from '../../../../../src/lib/utils';
import constants from '../../../../../src/lib/constants';
const { REGIONS } = constants;
const { getRegionNameById } = utils;

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

/* tslint:disable no-expression-statement */
describe('getRegionNameById()', () => {
  test('should be defined', () => {
    expect(getRegionNameById).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getRegionNameById).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId =>
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getRegionNameById(regionId)).toBe(REGIONS[regionId]);
    }),
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
      expect(() => getRegionNameById(wrongRegionId)).toThrow(RangeError);
    }),
  );
});
/* tslint:enable no-expression-statement */
