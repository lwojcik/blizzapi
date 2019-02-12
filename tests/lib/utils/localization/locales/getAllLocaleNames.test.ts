import * as utils from '../../../../../src/lib/utils';
import constants from '../../../../../src/lib/constants';

const { LOCALES } = constants;

const { getAllLocaleNames } = utils;

/* tslint:disable no-expression-statement */
describe('getAllLocaleNames()', () => {
  test('should be defined', () => {
    expect(getAllLocaleNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllLocaleNames).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllLocaleNames).toBeTruthy();
    expect(getAllLocaleNames().constructor === Array).toBe(true);
  });

  test('number of returned elements should match length of constants.REGIONS values after flattening', () => {
    const flattenedLocaleNamesLength = <number>(
      ([] as ReadonlyArray<string>).concat(...Object.values(LOCALES)).length
    );
    expect(getAllLocaleNames().length).toStrictEqual(flattenedLocaleNamesLength);
  });
});
/* tslint:enable no-expression-statement */
