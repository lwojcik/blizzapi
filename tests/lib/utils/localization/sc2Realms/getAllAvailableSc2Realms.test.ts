import * as utils from '../../../../../src/lib/utils';

const { getAllAvailableSc2Realms } = utils;

/* tslint:disable no-expression-statement */
describe('getAllAvailableSc2Realms()', () => {
  test('should be defined', () => {
    expect(getAllAvailableSc2Realms).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllAvailableSc2Realms).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllAvailableSc2Realms).toBeTruthy();
    expect(getAllAvailableSc2Realms().constructor === Array).toBe(true);
  });

  test('should return numbers in an array', () => {
    const isInteger = (element: any): boolean => typeof element === 'number';
    expect(getAllAvailableSc2Realms().every(isInteger)).toBe(true);
  });
});
/* tslint:enable no-expression-statement */
