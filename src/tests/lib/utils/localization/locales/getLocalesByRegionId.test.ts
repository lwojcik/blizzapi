import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { LOCALES } = constants;
const { getLocalesByRegionId } = utils;

describe('getLocalesByRegionId()', () => {
  test('should be defined', () => {
    expect(getLocalesByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getLocalesByRegionId).toBe('function');
  });

  test.each`
    input | expectedResult
    ${1}  | ${LOCALES[1]}
    ${2}  | ${LOCALES[2]}
    ${3}  | ${LOCALES[3]}
    ${5}  | ${LOCALES[5]}
  `('returns $expectedResult for region id $input as integer', ({ input, expectedResult }) => {
    expect(getLocalesByRegionId(parseInt(input, 10))).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${'1'} | ${LOCALES[1]}
    ${'2'} | ${LOCALES[2]}
    ${'3'} | ${LOCALES[3]}
    ${'5'} | ${LOCALES[5]}
  `('returns $expectedResult for region id $input as string', ({ input, expectedResult }) => {
    expect(getLocalesByRegionId(input)).toBe(expectedResult);
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
      getLocalesByRegionId(input);
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
      getLocalesByRegionId(parseInt(input, 10));
    }).toThrow(expected);
  });
});
