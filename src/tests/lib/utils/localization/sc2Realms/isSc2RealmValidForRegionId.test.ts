import * as utils from '../../../../../lib/utils';
const { isSc2RealmValidForRegionId } = utils;

/* tslint:disable no-expression-statement */
describe('isSc2RealmValidForRegionId()', () => {
  test('should be defined', () => {
    expect(isSc2RealmValidForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof isSc2RealmValidForRegionId).toBe('function');
  });

  test.each`
    inputSc2Realm | inputRegionId | expectedResult
    ${1}          | ${1}          | ${true}
    ${'1'}        | ${1}          | ${true}
    ${1}          | ${'1'}        | ${true}
    ${'1'}        | ${'1'}        | ${true}
    ${2}          | ${1}          | ${true}
    ${'2'}        | ${1}          | ${true}
    ${2}          | ${'1'}        | ${true}
    ${'2'}        | ${'1'}        | ${true}
    ${1}          | ${2}          | ${true}
    ${'1'}        | ${2}          | ${true}
    ${1}          | ${'2'}        | ${true}
    ${'1'}        | ${'2'}        | ${true}
    ${2}          | ${2}          | ${true}
    ${'2'}        | ${2}          | ${true}
    ${2}          | ${'2'}        | ${true}
    ${'2'}        | ${'2'}        | ${true}
    ${1}          | ${3}          | ${true}
    ${'1'}        | ${3}          | ${true}
    ${1}          | ${'3'}        | ${true}
    ${'1'}        | ${'3'}        | ${true}
    ${2}          | ${3}          | ${true}
    ${'2'}        | ${3}          | ${true}
    ${2}          | ${'3'}        | ${true}
    ${'2'}        | ${'3'}        | ${true}
    ${1}          | ${5}          | ${true}
    ${'1'}        | ${5}          | ${true}
    ${1}          | ${'5'}        | ${true}
    ${'1'}        | ${'5'}        | ${true}
  `(
    'returns $expectedResult for $inputSc2Realm and $inputRegionId as valid parameters',
    ({ inputSc2Realm, inputRegionId, expectedResult }) => {
      expect(isSc2RealmValidForRegionId(inputSc2Realm, inputRegionId)).toBe(expectedResult);
    },
  );

  test.each`
    inputSc2Realm | inputRegionId | expectedResult
    ${6}          | ${31}         | ${RangeError}
    ${'6'}        | ${11}         | ${RangeError}
    ${7}          | ${'12'}       | ${RangeError}
    ${'7'}        | ${'19'}       | ${RangeError}
    ${8}          | ${81}         | ${RangeError}
    ${'8'}        | ${71}         | ${RangeError}
    ${9}          | ${'15'}       | ${RangeError}
    ${'9'}        | ${'14'}       | ${RangeError}
    ${10}         | ${32}         | ${RangeError}
    ${'10'}       | ${22}         | ${RangeError}
    ${11}         | ${'12'}       | ${RangeError}
    ${'11'}       | ${'29'}       | ${RangeError}
    ${22}         | ${82}         | ${RangeError}
    ${'22'}       | ${27}         | ${RangeError}
    ${23}         | ${'26'}       | ${RangeError}
    ${'24'}       | ${'42'}       | ${RangeError}
    ${15}         | ${23}         | ${RangeError}
    ${'16'}       | ${93}         | ${RangeError}
    ${10}         | ${'23'}       | ${RangeError}
    ${'11'}       | ${'73'}       | ${RangeError}
    ${24}         | ${63}         | ${RangeError}
    ${'22'}       | ${53}         | ${RangeError}
    ${29}         | ${'33'}       | ${RangeError}
    ${'222'}      | ${'13'}       | ${RangeError}
    ${13}         | ${35}         | ${RangeError}
    ${'153'}      | ${85}         | ${RangeError}
    ${121}        | ${'57'}       | ${RangeError}
    ${'11'}       | ${'52'}       | ${RangeError}
  `(
    'throws $expectedResult for $inputSc2Realm and $inputRegionId as incorrect parameters',
    ({ inputSc2Realm, inputRegionId }) => {
      expect(() => {
        isSc2RealmValidForRegionId(inputSc2Realm, inputRegionId);
      }).toThrow();
    },
  );
});
/* tslint:enable no-expression-statement */
