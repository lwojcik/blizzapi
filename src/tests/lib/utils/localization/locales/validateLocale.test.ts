import * as utils from '../../../../../lib/utils';
const { validateLocale } = utils;

import localesJson from '../../../../__testData__/locales.json';
import nonexistentLocalesJson from '../../../../__testData__/nonexistentLocales.json';
import wrongLocalesJson from '../../../../__testData__/wrongLocales.json';

/* tslint:disable no-expression-statement */
describe('validateLocale()', () => {
  test('should be defined', () => {
    expect(validateLocale).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof validateLocale).toBe('function');
  });

  (localesJson as ReadonlyArray<string>).forEach(locale =>
    test(`should return true for ${locale} as valid locale`, () => {
      expect(validateLocale(locale)).toBe(true);
    }),
  );

  (nonexistentLocalesJson as ReadonlyArray<string>).forEach(locale =>
    test(`should return false for ${locale} as non-existent locale`, () => {
      expect(validateLocale(locale)).toBe(false);
    }),
  );

  (wrongLocalesJson as ReadonlyArray<string>).forEach(locale =>
    test(`should throw RangeError for ${locale} as invalid locale`, () => {
      expect(() => validateLocale(locale)).toThrow(RangeError);
    }),
  );
});
/* tslint:enable no-expression-statement */
