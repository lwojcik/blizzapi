import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { OAUTH_CHECK_TOKEN_URIS } = constants;
const { getCheckTokenUriByRegionId } = utils;

describe('getCheckTokenUriByRegionId()', () => {
  test('should be defined', () => {
    expect(getCheckTokenUriByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getCheckTokenUriByRegionId).toBe('function');
  });

  test.each`
    input | expectedResult
    ${1}  | ${OAUTH_CHECK_TOKEN_URIS[1]}
    ${2}  | ${OAUTH_CHECK_TOKEN_URIS[2]}
    ${3}  | ${OAUTH_CHECK_TOKEN_URIS[3]}
    ${5}  | ${OAUTH_CHECK_TOKEN_URIS[5]}
  `('returns $expectedResult for region id $input as integer', ({ input, expectedResult }) => {
    expect(getCheckTokenUriByRegionId(parseInt(input, 10))).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${'1'} | ${OAUTH_CHECK_TOKEN_URIS[1]}
    ${'2'} | ${OAUTH_CHECK_TOKEN_URIS[2]}
    ${'3'} | ${OAUTH_CHECK_TOKEN_URIS[3]}
    ${'5'} | ${OAUTH_CHECK_TOKEN_URIS[5]}
  `('returns $expectedResult for region id $input as string', ({ input, expectedResult }) => {
    expect(getCheckTokenUriByRegionId(input)).toBe(expectedResult);
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
      getCheckTokenUriByRegionId(input);
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
      getCheckTokenUriByRegionId(parseInt(input, 10));
    }).toThrow(expected);
  });
});
