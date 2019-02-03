import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';

const { LOCALES, DEFAULT_LOCALES } = constants;
const { getDefaultLocaleNameForRegionId } = utils;

/* tslint:disable no-expression-statement */
describe('getDefaultLocaleNameForRegionId()', () => {
  test('should be defined', () => {
    expect(getDefaultLocaleNameForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getDefaultLocaleNameForRegionId).toBe('function');
  });

  test.each`
    input | expectedResult
    ${1}  | ${LOCALES[1][DEFAULT_LOCALES[1]]}
    ${2}  | ${LOCALES[2][DEFAULT_LOCALES[2]]}
    ${3}  | ${LOCALES[3][DEFAULT_LOCALES[3]]}
    ${5}  | ${LOCALES[5][DEFAULT_LOCALES[5]]}
  `('returns $expectedResult for region id $input as integer', ({ input, expectedResult }) => {
    expect(getDefaultLocaleNameForRegionId(parseInt(input, 10))).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${'1'} | ${LOCALES[1][DEFAULT_LOCALES[1]]}
    ${'2'} | ${LOCALES[2][DEFAULT_LOCALES[2]]}
    ${'3'} | ${LOCALES[3][DEFAULT_LOCALES[3]]}
    ${'5'} | ${LOCALES[5][DEFAULT_LOCALES[5]]}
  `('returns $expectedResult for region id $input as string', ({ input, expectedResult }) => {
    expect(getDefaultLocaleNameForRegionId(input)).toBe(expectedResult);
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
      getDefaultLocaleNameForRegionId(input);
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
      getDefaultLocaleNameForRegionId(parseInt(input, 10));
    }).toThrow(expected);
  });
});
/* tslint:enable no-expression-statement */
