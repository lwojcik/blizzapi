import { ConstantKeys } from '../../../@types';
import * as utils from '../../../src/lib/utils/common';
const { getConstantByRegionName } = utils;

import regionNamesJson from '../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../__testData__/wrongRegionNames.json';
import constantKeysJson from '../../../__testData__/constantKeys.json';

/* tslint:disable no-expression-statement */
describe('getConstantByRegionName()', () => {
  test('should be defined', () => {
    expect(getConstantByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getConstantByRegionName).toBe('function');
  });

  (regionNamesJson as ReadonlyArray<string>).forEach(regionName =>
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test(`should return correct value for ${regionName} and ${constantKey} as valid parameters`, () => {
        expect(getConstantByRegionName(regionName, constantKey)).toMatchSnapshot();
      });
    }),
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName =>
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test(`should throw RangeError for ${wrongRegionName} and ${constantKey}`, () => {
        expect(() => getConstantByRegionName(wrongRegionName, constantKey)).toThrow(RangeError);
      });
    }),
  );
});
/* tslint:enable no-expression-statement */
