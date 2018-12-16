import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { OAUTH_TOKEN_URIS } = constants;
const { getTokenUriByRegionName } = utils;

describe('getAuthorizeUriByRegionName()', () => {
  test('should be defined', () => {
    expect(getTokenUriByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getTokenUriByRegionName).toBe('function');
  });

  test.each`
    input   | expectedResult
    ${'us'} | ${OAUTH_TOKEN_URIS[1]}
    ${'Us'} | ${OAUTH_TOKEN_URIS[1]}
    ${'uS'} | ${OAUTH_TOKEN_URIS[1]}
    ${'US'} | ${OAUTH_TOKEN_URIS[1]}
    ${'eu'} | ${OAUTH_TOKEN_URIS[2]}
    ${'Eu'} | ${OAUTH_TOKEN_URIS[2]}
    ${'eU'} | ${OAUTH_TOKEN_URIS[2]}
    ${'EU'} | ${OAUTH_TOKEN_URIS[2]}
    ${'kr'} | ${OAUTH_TOKEN_URIS[3]}
    ${'Kr'} | ${OAUTH_TOKEN_URIS[3]}
    ${'kR'} | ${OAUTH_TOKEN_URIS[3]}
    ${'KR'} | ${OAUTH_TOKEN_URIS[3]}
    ${'cn'} | ${OAUTH_TOKEN_URIS[5]}
    ${'Cn'} | ${OAUTH_TOKEN_URIS[5]}
    ${'cN'} | ${OAUTH_TOKEN_URIS[5]}
    ${'CN'} | ${OAUTH_TOKEN_URIS[5]}
  `('returns $expectedResult for region name $input', ({ input, expectedResult }) => {
    expect(getTokenUriByRegionName(input)).toBe(expectedResult);
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
      getTokenUriByRegionName(input);
    }).toThrow(expected);
  });
});
