import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { OAUTH_CHECK_TOKEN_URIS } = constants;
const { getCheckTokenUriByRegionName } = utils;

describe('getAuthorizeUriByRegionName()', () => {
  test('should be defined', () => {
    expect(getCheckTokenUriByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getCheckTokenUriByRegionName).toBe('function');
  });

  test.each`
    input   | expectedResult
    ${'us'} | ${OAUTH_CHECK_TOKEN_URIS[1]}
    ${'Us'} | ${OAUTH_CHECK_TOKEN_URIS[1]}
    ${'uS'} | ${OAUTH_CHECK_TOKEN_URIS[1]}
    ${'US'} | ${OAUTH_CHECK_TOKEN_URIS[1]}
    ${'eu'} | ${OAUTH_CHECK_TOKEN_URIS[2]}
    ${'Eu'} | ${OAUTH_CHECK_TOKEN_URIS[2]}
    ${'eU'} | ${OAUTH_CHECK_TOKEN_URIS[2]}
    ${'EU'} | ${OAUTH_CHECK_TOKEN_URIS[2]}
    ${'kr'} | ${OAUTH_CHECK_TOKEN_URIS[3]}
    ${'Kr'} | ${OAUTH_CHECK_TOKEN_URIS[3]}
    ${'kR'} | ${OAUTH_CHECK_TOKEN_URIS[3]}
    ${'KR'} | ${OAUTH_CHECK_TOKEN_URIS[3]}
    ${'cn'} | ${OAUTH_CHECK_TOKEN_URIS[5]}
    ${'Cn'} | ${OAUTH_CHECK_TOKEN_URIS[5]}
    ${'cN'} | ${OAUTH_CHECK_TOKEN_URIS[5]}
    ${'CN'} | ${OAUTH_CHECK_TOKEN_URIS[5]}
  `('returns $expectedResult for region name $input', ({ input, expectedResult }) => {
    expect(getCheckTokenUriByRegionName(input)).toBe(expectedResult);
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
      getCheckTokenUriByRegionName(input);
    }).toThrow(expected);
  });
});
