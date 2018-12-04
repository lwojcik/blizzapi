import * as utils from '../../../../../lib/utils';
const { getRegionIdByName } = utils;

describe('getRegionIdByName()', () => {
  test('should be defined', () => {
    expect(getRegionIdByName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getRegionIdByName).toBe('function');
  });

  test.each`
    input   | expectedResult
    ${'us'} | ${1}
    ${'US'} | ${1}
    ${'Us'} | ${1}
    ${'uS'} | ${1}
    ${'eu'} | ${2}
    ${'EU'} | ${2}
    ${'Eu'} | ${2}
    ${'eU'} | ${2}
    ${'kr'} | ${3}
    ${'KR'} | ${3}
    ${'Kr'} | ${3}
    ${'kR'} | ${3}
    ${'tw'} | ${3}
    ${'TW'} | ${3}
    ${'Tw'} | ${3}
    ${'tW'} | ${3}
    ${'cn'} | ${5}
    ${'CN'} | ${5}
    ${'Cn'} | ${5}
    ${'cN'} | ${5}
  `('returns $expectedResult for region name $input', ({ input, expectedResult }) => {
    expect(getRegionIdByName(input)).toBe(expectedResult);
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
  `('throws $expectedResult for $input as string', ({ input, expectedResult }) => {
    expect(() => {
      getRegionIdByName(input);
    }).toThrow(expectedResult);
  });
});
