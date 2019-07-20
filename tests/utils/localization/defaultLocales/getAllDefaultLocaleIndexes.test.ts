import * as utils from '../../../../src/lib/utils';
import constants from '../../../../src/lib/constants';

const { DEFAULT_LOCALES } = constants;
const { getAllDefaultLocaleIndexes } = utils;

/* tslint:disable no-expression-statement */
describe('getAllDefaultLocales()', () => {
  test('should be defined', () => {
    expect(getAllDefaultLocaleIndexes).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllDefaultLocaleIndexes).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllDefaultLocaleIndexes()).toBeTruthy();
    expect(typeof getAllDefaultLocaleIndexes()).toBe('object');
  });

  test('returned object should match constants.REGIONS property', () => {
    expect(getAllDefaultLocaleIndexes()).toMatchObject(DEFAULT_LOCALES);
  });
});
/* tslint:enable no-expression-statement */
