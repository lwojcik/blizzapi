import * as utils from "../../../../../src/utils";
import { Locale } from "../../../../../src/types";

import localesJson from "../../../../__testData__/locales.json";
import nonexistentLocalesJson from "../../../../__testData__/nonexistentLocales.json";
import wrongLocalesJson from "../../../../__testData__/wrongLocales.json";

const { validateLocale } = utils;

describe("validateLocale()", () => {
  it("should be defined", () => {
    expect(validateLocale).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof validateLocale).toBe("function");
  });

  (localesJson as ReadonlyArray<Locale>).forEach((locale) =>
    it(`should return true for ${locale} as valid locale`, () => {
      expect(validateLocale(locale)).toBe(true);
    })
  );

  (nonexistentLocalesJson as ReadonlyArray<string>).forEach((locale) =>
    it(`should return false for ${locale} as non-existent locale`, () => {
      expect(validateLocale(locale as Locale)).toBe(false);
    })
  );

  (wrongLocalesJson as ReadonlyArray<Locale>).forEach((locale) =>
    it(`should throw RangeError for ${locale} as invalid locale`, () => {
      expect(() => validateLocale(locale)).toThrow(RangeError);
    })
  );
});
