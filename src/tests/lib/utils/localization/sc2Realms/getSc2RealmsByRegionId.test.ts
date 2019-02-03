import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { SC2_REALMS } = constants;
const { getSc2RealmsByRegionId } = utils;

import regionIdsJson from '../../../../__testData__/regionIds.json';
import wrongRegionIdsJson from '../../../../__testData__/wrongRegionIds.json';

/* tslint:disable no-expression-statement */
describe('getSc2RealmsByRegionId()', () => {
  test('should be defined', () => {
    expect(getSc2RealmsByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getSc2RealmsByRegionId).toBe('function');
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach(regionId =>
    test(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getSc2RealmsByRegionId(regionId)).toBe(SC2_REALMS[regionId]);
    }),
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(wrongRegionId =>
    test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
      expect(() => getSc2RealmsByRegionId(wrongRegionId)).toThrow(RangeError);
    }),
  );
});
/* tslint:enable no-expression-statement */
