import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';

const { getAllLocales } = utils;

describe('getAllLocales()', () => {
  test('should be defined', () => {
    expect(getAllLocales).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllLocales).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllLocales()).toBeTruthy();
    expect(typeof getAllLocales()).toBe('object');
  });

  test('returned object should match constants.LOCALES property', () => {
    expect(getAllLocales()).toMatchObject(constants.LOCALES);
  });
});
