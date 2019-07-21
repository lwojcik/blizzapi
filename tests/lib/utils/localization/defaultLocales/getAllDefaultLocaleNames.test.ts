import * as utils from '../../../../../src/lib/utils';
import constants from '../../../../../src/lib/constants';

const { REGIONS } = constants;
const { getAllDefaultLocaleNames } = utils;

describe('getAllDefaultLocales()', () => {
  test('should be defined', () => {
    expect(getAllDefaultLocaleNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllDefaultLocaleNames).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllDefaultLocaleNames()).toBeTruthy();
    expect(typeof getAllDefaultLocaleNames()).toBe('object');
  });

  test('returned object should be of the same size as constants.REGIONS', () => {
    const localeNamesLength = Object.keys(getAllDefaultLocaleNames()).length;
    const regionsLength = Object.keys(REGIONS).length;
    expect(localeNamesLength).toStrictEqual(regionsLength);
  });

  test('object values should be derived from constants.LOCALES', () => {
    const receivedLocaleNames = Object.values(getAllDefaultLocaleNames());
    const expectedLocaleNames = ([] as ReadonlyArray<string>).concat(
      ...Object.values(constants.LOCALES),
    );

    receivedLocaleNames.forEach(localeName => {
      expect(expectedLocaleNames.includes(localeName)).toBe(true);
    });
  });
});