import { BattleNetUtils } from '../../../lib/utils';
import constants from '../../../lib/constants';
const { REGIONS } = constants;
const { getRegionNameById } = BattleNetUtils;

describe('getRegionNameById()', () => {
  test('should be defined', () => {
    expect(getRegionNameById).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getRegionNameById).toBe('function');
  });

  test.each`
    input | expectedResult
    ${1}  | ${REGIONS[1]}
    ${2}  | ${REGIONS[2]}
    ${3}  | ${REGIONS[3]}
    ${5}  | ${REGIONS[5]}
  `('returns $expectedResult for region id $input as integer', ({ input, expectedResult }) => {
    expect(getRegionNameById(parseInt(input, 10))).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${'1'} | ${REGIONS[1]}
    ${'2'} | ${REGIONS[2]}
    ${'3'} | ${REGIONS[3]}
    ${'5'} | ${REGIONS[5]}
  `('returns $expectedResult for region id $input as string', ({ input, expectedResult }) => {
    expect(getRegionNameById(input)).toBe(expectedResult);
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
      getRegionNameById(input);
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
      getRegionNameById(parseInt(input, 10));
    }).toThrow(expected);
  });
});
