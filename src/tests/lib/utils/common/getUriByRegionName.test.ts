import { ConstantKeys } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common';
const { getUriByRegionName } = utils;

import regionNamesJson from '../../../__testData__/regionNames.json';
import wrongRegionNamesJson from '../../../__testData__/wrongRegionNames.json';
import constantKeysJson from '../../../__testData__/constantKeys.json';

/* tslint:disable no-expression-statement */
describe('getUriByRegionName()', () => {
  test('should be defined', () => {
    expect(getUriByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegionName).toBe('function');
  });

  (regionNamesJson as ReadonlyArray<string>).forEach(regionName =>
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test('should return correct value for ${regionName} and ${constantKey} as valid parameters', () => {
        expect(getUriByRegionName(regionName, constantKey)).toMatchSnapshot();
      });
    }),
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName =>
    (constantKeysJson as ConstantKeys).forEach(constantKey => {
      test('should return correct value for ${regionName} and ${constantKey} as valid parameters', () => {
        expect(() => getUriByRegionName(wrongRegionName, constantKey)).toThrow(RangeError);
      });
    }),
  );
});
/* tslint:enable no-expression-statement */
