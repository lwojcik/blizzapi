import * as utils from "../../../../../src/utils";
import { RegionName, RegionIdOrName } from "../../../../../src/types";

import regionNamesJson from "../../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../../__testData__/wrongRegionNames.json";
import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { getCheckTokenUriByRegion } = utils;

describe("getCheckTokenUriByRegion()", () => {
  it("should be defined", () => {
    expect(getCheckTokenUriByRegion).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getCheckTokenUriByRegion).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<string | number>).forEach((regionId) => {
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(
        getCheckTokenUriByRegion(regionId as RegionIdOrName)
      ).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach(
    (wrongRegionId) => {
      it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
        expect(() =>
          getCheckTokenUriByRegion(wrongRegionId as RegionIdOrName)
        ).toThrow(RangeError);
      });
    }
  );

  (regionNamesJson as ReadonlyArray<string>).forEach((regionName) => {
    it(`should return correct value for ${regionName} as valid region name`, () => {
      expect(
        getCheckTokenUriByRegion(regionName as RegionName)
      ).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) => {
    it(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() =>
        getCheckTokenUriByRegion(wrongRegionName as RegionName)
      ).toThrow(RangeError);
    });
  });
});
