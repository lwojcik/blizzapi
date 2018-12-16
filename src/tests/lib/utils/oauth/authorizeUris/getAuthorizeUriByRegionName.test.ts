import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { OAUTH_AUTHORIZE_URIS } = constants;
const { getAuthorizeUriByRegionName } = utils;

describe('getAuthorizeUriByRegionName()', () => {
  test('should be defined', () => {
    expect(getAuthorizeUriByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAuthorizeUriByRegionName).toBe('function');
  });

  test.each`
    input   | expectedResult
    ${'us'} | ${OAUTH_AUTHORIZE_URIS[1]}
    ${'Us'} | ${OAUTH_AUTHORIZE_URIS[1]}
    ${'uS'} | ${OAUTH_AUTHORIZE_URIS[1]}
    ${'US'} | ${OAUTH_AUTHORIZE_URIS[1]}
    ${'eu'} | ${OAUTH_AUTHORIZE_URIS[2]}
    ${'Eu'} | ${OAUTH_AUTHORIZE_URIS[2]}
    ${'eU'} | ${OAUTH_AUTHORIZE_URIS[2]}
    ${'EU'} | ${OAUTH_AUTHORIZE_URIS[2]}
    ${'kr'} | ${OAUTH_AUTHORIZE_URIS[3]}
    ${'Kr'} | ${OAUTH_AUTHORIZE_URIS[3]}
    ${'kR'} | ${OAUTH_AUTHORIZE_URIS[3]}
    ${'KR'} | ${OAUTH_AUTHORIZE_URIS[3]}
    ${'cn'} | ${OAUTH_AUTHORIZE_URIS[5]}
    ${'Cn'} | ${OAUTH_AUTHORIZE_URIS[5]}
    ${'cN'} | ${OAUTH_AUTHORIZE_URIS[5]}
    ${'CN'} | ${OAUTH_AUTHORIZE_URIS[5]}
  `('returns $expectedResult for region name $input', ({ input, expectedResult }) => {
    expect(getAuthorizeUriByRegionName(input)).toBe(expectedResult);
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
      getAuthorizeUriByRegionName(input);
    }).toThrow(expected);
  });
});
