import * as utils from '../../../../../lib/utils';
const { validateSc2Realm } = utils;

describe('validateSc2Realm()', () => {
  test('should be defined', () => {
    expect(validateSc2Realm).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof validateSc2Realm).toBe('function');
  });

  test.each`
    input  | expectedResult
    ${1}   | ${true}
    ${2}   | ${true}
    ${'1'} | ${true}
    ${'2'} | ${true}
  `('returns $expectedResult for $input as valid sc2 realm', ({ input, expectedResult }) => {
    expect(validateSc2Realm(input)).toBe(expectedResult);
  });

  test.each`
    input  | expectedResult
    ${6}   | ${false}
    ${7}   | ${false}
    ${8}   | ${false}
    ${9}   | ${false}
    ${'6'} | ${false}
    ${'7'} | ${false}
    ${'8'} | ${false}
    ${'9'} | ${false}
  `('returns $expectedResult for $input as non-existent SC2 realm', ({ input, expectedResult }) => {
    expect(validateSc2Realm(input)).toBe(expectedResult);
  });

  test.each`
    input     | expectedResult
    ${10}     | ${RangeError}
    ${100}    | ${RangeError}
    ${999}    | ${RangeError}
    ${4534}   | ${RangeError}
    ${'10'}   | ${RangeError}
    ${'100'}  | ${RangeError}
    ${'999'}  | ${RangeError}
    ${'4353'} | ${RangeError}
  `('throws $expectedResult for $input as incorrect SC2 realm', ({ input, expectedResult }) => {
    expect(() => {
      validateSc2Realm(input);
    }).toThrow(expectedResult);
  });
});
