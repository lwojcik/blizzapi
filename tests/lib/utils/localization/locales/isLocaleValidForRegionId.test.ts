import * as utils from "../../../../../src/utils";
import { Locale, RegionId, RegionIdAsString } from "../../../../../src/types";

import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";
import localesJson from "../../../../__testData__/locales.json";
import nonexistentLocalesJson from "../../../../__testData__/nonexistentLocales.json";
import wrongLocalesJson from "../../../../__testData__/wrongLocales.json";

const { isLocaleValidForRegionId } = utils;

describe("isLocaleValidForRegionId()", () => {
  it("should be defined", () => {
    expect(isLocaleValidForRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof isLocaleValidForRegionId).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<RegionId | RegionIdAsString>).forEach(
    (regionId) =>
      (localesJson as ReadonlyArray<Locale>).forEach((locale) =>
        it(`should return true for ${locale} and ${regionId} as valid parameters`, () => {
          expect(isLocaleValidForRegionId(locale, regionId)).toMatchSnapshot();
        })
      )
  );

  (regionIdsJson as ReadonlyArray<RegionId | RegionIdAsString>).forEach(
    (regionId) =>
      (nonexistentLocalesJson as ReadonlyArray<string>).forEach(
        (nonExistentLocale) =>
          it(`should return true for ${nonExistentLocale} as non-existent locale and ${regionId} as valid region id`, () => {
            expect(() =>
              isLocaleValidForRegionId(nonExistentLocale as Locale, regionId)
            ).toThrow(RangeError);
          })
      )
  );

  (regionIdsJson as ReadonlyArray<string | number>).forEach((regionId) =>
    (wrongLocalesJson as ReadonlyArray<string>).forEach((wrongLocale) =>
      it(`should return true for ${wrongLocale} as wrong locale and ${regionId} as valid region id`, () => {
        expect(() =>
          isLocaleValidForRegionId(wrongLocale as Locale, regionId as RegionId)
        ).toThrow(RangeError);
      })
    )
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (localesJson as ReadonlyArray<string>).forEach((locale) =>
        it(`should throw RangeError for ${wrongRegionId} as invalid region id and ${locale} as valid locale`, () => {
          expect(() =>
            isLocaleValidForRegionId(
              locale as Locale,
              wrongRegionId as RegionId
            )
          ).toThrow(RangeError);
        })
      )
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (nonexistentLocalesJson as ReadonlyArray<string>).forEach(
        (nonExistentLocale) =>
          it(`should throw RangeError for ${wrongRegionId} as invalid region id and ${nonExistentLocale} as non-existent locale`, () => {
            expect(() =>
              isLocaleValidForRegionId(
                nonExistentLocale as Locale,
                wrongRegionId as RegionId
              )
            ).toThrow(RangeError);
          })
      )
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (wrongLocalesJson as ReadonlyArray<string>).forEach((wrongLocale) =>
        it(`should throw RangeError for ${wrongRegionId} as invalid region id and ${wrongLocale} as wrong locale`, () => {
          expect(() =>
            isLocaleValidForRegionId(
              wrongLocale as Locale,
              wrongRegionId as RegionId
            )
          ).toThrow(RangeError);
        })
      )
  );
});
