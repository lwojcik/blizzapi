import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';
const { REGION_API_HOSTS } = constants;

const { getApiHostByRegionName } = utils;

describe('getApiHostByRegionName()', () => {
  test('should be defined', () => {
    expect(getApiHostByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getApiHostByRegionName).toBe('function');
  });

  test.each`
    input   | expectedResult
    ${'us'} | ${REGION_API_HOSTS[1]}
    ${'Us'} | ${REGION_API_HOSTS[1]}
    ${'uS'} | ${REGION_API_HOSTS[1]}
    ${'US'} | ${REGION_API_HOSTS[1]}
    ${'eu'} | ${REGION_API_HOSTS[2]}
    ${'Eu'} | ${REGION_API_HOSTS[2]}
    ${'eU'} | ${REGION_API_HOSTS[2]}
    ${'EU'} | ${REGION_API_HOSTS[2]}
    ${'kr'} | ${REGION_API_HOSTS[3]}
    ${'Kr'} | ${REGION_API_HOSTS[3]}
    ${'kR'} | ${REGION_API_HOSTS[3]}
    ${'KR'} | ${REGION_API_HOSTS[3]}
    ${'cn'} | ${REGION_API_HOSTS[5]}
    ${'Cn'} | ${REGION_API_HOSTS[5]}
    ${'cN'} | ${REGION_API_HOSTS[5]}
    ${'CN'} | ${REGION_API_HOSTS[5]}
  `('returns $expectedResult for region name $input', ({ input, expectedResult }) => {
    expect(getApiHostByRegionName(input)).toBe(expectedResult);
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
      getApiHostByRegionName(input);
    }).toThrow(expected);
  });
});
