import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { REGION_API_HOSTS } = constants;
const { getApiHostByRegionId } = utils;

describe('getApiHostByRegionId()', () => {
  test('should be defined', () => {
    expect(getApiHostByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getApiHostByRegionId).toBe('function');
  });

  test.each`
    input | expectedResult
    ${1}  | ${REGION_API_HOSTS[1]}
    ${2}  | ${REGION_API_HOSTS[2]}
    ${3}  | ${REGION_API_HOSTS[3]}
    ${5}  | ${REGION_API_HOSTS[5]}
  `('returns $expectedResult for region id $input as integer', ({ input, expectedResult }) => {
    expect(getApiHostByRegionId(parseInt(input, 10))).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${'1'} | ${REGION_API_HOSTS[1]}
    ${'2'} | ${REGION_API_HOSTS[2]}
    ${'3'} | ${REGION_API_HOSTS[3]}
    ${'5'} | ${REGION_API_HOSTS[5]}
  `('returns $expectedResult for region id $input as string', ({ input, expectedResult }) => {
    expect(getApiHostByRegionId(input)).toBe(expectedResult);
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
      getApiHostByRegionId(input);
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
      getApiHostByRegionId(parseInt(input, 10));
    }).toThrow(expected);
  });
});
