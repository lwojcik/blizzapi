import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";
import { RegionId } from "../../../../../src/types";

import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { LOCALES, DEFAULT_LOCALES } = constants;
const { getDefaultLocaleNameForRegionId } = utils;

describe("getDefaultLocaleNameForRegionId()", () => {
  it("should be defined", () => {
    expect(getDefaultLocaleNameForRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getDefaultLocaleNameForRegionId).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<RegionId>).forEach((regionId) =>
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getDefaultLocaleNameForRegionId(regionId)).toBe(
        LOCALES[regionId][DEFAULT_LOCALES[regionId]]
      );
    })
  );

  (wrongRegionIdsJson as ReadonlyArray<RegionId>).forEach((wrongRegionId) =>
    it(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
      expect(() => getDefaultLocaleNameForRegionId(wrongRegionId)).toThrow(
        RangeError
      );
    })
  );
});
