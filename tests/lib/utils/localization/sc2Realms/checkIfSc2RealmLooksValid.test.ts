import * as utils from '../../../../../src/utils';

const { checkIfSc2RealmLooksValid } = utils;

describe('checkIfSc2RealmLooksValid()', () => {
  test('should be defined', () => {
    expect(checkIfSc2RealmLooksValid).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof checkIfSc2RealmLooksValid).toBe('function');
  });

  // test.each`
  //   input  | expectedResult
  //   ${6}   | ${true}
  //   ${7}   | ${true}
  //   ${8}   | ${true}
  //   ${9}   | ${true}
  //   ${'6'} | ${true}
  //   ${'7'} | ${true}
  //   ${'8'} | ${true}
  //   ${'9'} | ${true}
  // `('returns $expectedResult for $input as non-existent SC2 realm', ({ input, expectedResult }) => {
  //   expect(checkIfSc2RealmLooksValid(input)).toBe(expectedResult);
  // });

  // test.each`
  //   input  | expectedResult
  //   ${1}   | ${true}
  //   ${2}   | ${true}
  //   ${3}   | ${true}
  //   ${5}   | ${true}
  //   ${'1'} | ${true}
  //   ${'2'} | ${true}
  //   ${'3'} | ${true}
  //   ${'5'} | ${true}
  // `('returns $expectedResult for $input as valid sc2 realm', ({ input, expectedResult }) => {
  //   expect(checkIfSc2RealmLooksValid(input)).toBe(expectedResult);
  // });

  // test.each`
  //   input     | expectedResult
  //   ${10}     | ${false}
  //   ${100}    | ${false}
  //   ${999}    | ${false}
  //   ${4534}   | ${false}
  //   ${'10'}   | ${false}
  //   ${'100'}  | ${false}
  //   ${'999'}  | ${false}
  //   ${'4353'} | ${false}
  // `('returns $expectedResult for $input as valid sc2 realm', ({ input, expectedResult }) => {
  //   expect(checkIfSc2RealmLooksValid(input)).toBe(expectedResult);
  // });
});
