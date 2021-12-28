import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";
import { RegionId } from "../../../../../src/types";

import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { LOCALES } = constants;
const { getLocalesByRegionId } = utils;

describe("getLocalesByRegionId()", () => {
  it("should be defined", () => {
    expect(getLocalesByRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getLocalesByRegionId).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<RegionId>).forEach((regionId) =>
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getLocalesByRegionId(regionId)).toBe(LOCALES[regionId]);
    })
  );

  (wrongRegionIdsJson as ReadonlyArray<RegionId>).forEach((wrongRegionId) =>
    it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
      expect(() => getLocalesByRegionId(wrongRegionId)).toThrow(RangeError);
    })
  );
});
