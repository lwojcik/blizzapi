import * as utils from "../../../../../src/utils";
import { RegionId, RegionName } from "../../../../../src/types";

import regionNamesJson from "../../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../../__testData__/wrongRegionNames.json";
import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { getAuthorizeUriByRegion } = utils;

describe("getAuthorizeUriByRegion()", () => {
  it("should be defined", () => {
    expect(getAuthorizeUriByRegion).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAuthorizeUriByRegion).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) => {
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getAuthorizeUriByRegion(regionId as RegionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) => {
      it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
        expect(() =>
          getAuthorizeUriByRegion(wrongRegionId as RegionId)
        ).toThrow(RangeError);
      });
    }
  );

  (regionNamesJson as ReadonlyArray<RegionName>).forEach((regionName) => {
    it(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getAuthorizeUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) => {
    it("should throw RangeError for invalid region name", () => {
      expect(() =>
        getAuthorizeUriByRegion(wrongRegionName as RegionName)
      ).toThrow(RangeError);
    });
  });
});
