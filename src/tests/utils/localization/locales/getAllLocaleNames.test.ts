import { BattleNetUtils } from '../../../../lib/utils';
import constants from '../../../../lib/constants';

const { LOCALES } = constants;

const { getAllLocaleNames } = BattleNetUtils;

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
    const flattenedLocaleNamesLength = <number>([] as string[]).concat(...Object.values(LOCALES)).length;
    expect(getAllLocaleNames().length).toStrictEqual(flattenedLocaleNamesLength);
  });
});
