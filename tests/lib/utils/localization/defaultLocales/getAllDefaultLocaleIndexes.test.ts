import * as utils from '../../../../../src/utils';
import constants from '../../../../../src/constants';

const { DEFAULT_LOCALES } = constants;
const { getAllDefaultLocaleIndexes } = utils;

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