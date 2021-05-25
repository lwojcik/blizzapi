import * as utils from '../../../../../src/utils';
import { constants } from '../../../../../src/constants';

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

const { REGIONS } = constants;
const { getRegionNameById } = utils;

describe('getRegionNameById()', () => {
  it('should be defined', () => {
    expect(getRegionNameById).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getRegionNameById).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId =>
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getRegionNameById(regionId)).toBe(REGIONS[regionId]);
    }));

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
      expect(() => getRegionNameById(wrongRegionId)).toThrow(RangeError);
    }));
});
