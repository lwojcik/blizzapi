import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { SC2_REALMS } = constants;
const { getSc2RealmsByRegionId } = utils;

describe('getSc2RealmsByRegionId()', () => {
  test('should be defined', () => {
    expect(getSc2RealmsByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getSc2RealmsByRegionId).toBe('function');
  });

  test.each`
    input | expectedResult
    ${1}  | ${SC2_REALMS[1]}
    ${2}  | ${SC2_REALMS[2]}
    ${3}  | ${SC2_REALMS[3]}
    ${5}  | ${SC2_REALMS[5]}
  `('returns $expectedResult for region id $input as integer', ({ input, expectedResult }) => {
    expect(getSc2RealmsByRegionId(parseInt(input, 10))).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${'1'} | ${SC2_REALMS[1]}
    ${'2'} | ${SC2_REALMS[2]}
    ${'3'} | ${SC2_REALMS[3]}
    ${'5'} | ${SC2_REALMS[5]}
  `('returns $expectedResult for region id $input as string', ({ input, expectedResult }) => {
    expect(getSc2RealmsByRegionId(input)).toBe(expectedResult);
  });

  test.each`
    input      | expectedResult
    ${'10'}    | ${RangeError}
    ${'9999'}  | ${RangeError}
    ${'23232'} | ${RangeError}
    ${'a1'}    | ${RangeError}
    ${'adasf'} | ${RangeError}
    ${'1abc'}  | ${RangeError}
    ${'!@#$'}  | ${RangeError}
    ${'><1'}   | ${RangeError}
  `('throws $expectedResult for $input as string', ({ input, expected }) => {
    expect(() => {
      getSc2RealmsByRegionId(input);
    }).toThrow(expected);
  });

  test.each`
    input    | expectedResult
    ${10}    | ${RangeError}
    ${9999}  | ${RangeError}
    ${23232} | ${RangeError}
    ${0}     | ${RangeError}
    ${-32}   | ${RangeError}
    ${-5}    | ${RangeError}
  `('throws $expectedResult for $input as number', ({ input, expected }) => {
    expect(() => {
      getSc2RealmsByRegionId(parseInt(input, 10));
    }).toThrow(expected);
  });
});
