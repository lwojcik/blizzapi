import * as utils from "../../../../../src/utils";
import { RegionId, RegionName } from "../../../../../src/types";

import regionNamesJson from "../../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../../__testData__/wrongRegionNames.json";
import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { getTokenUriByRegion } = utils;

describe("getTokenUriByRegion()", () => {
  it("should be defined", () => {
    expect(getTokenUriByRegion).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getTokenUriByRegion).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<string | number>).forEach((regionId) => {
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getTokenUriByRegion(regionId as RegionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach(
    (wrongRegionId) => {
      it(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
        expect(() => getTokenUriByRegion(wrongRegionId as RegionId)).toThrow(
          RangeError
        );
      });
    }
  );

  (regionNamesJson as ReadonlyArray<RegionName>).forEach((regionName) => {
    it(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getTokenUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) => {
    it(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getTokenUriByRegion(wrongRegionName as RegionName)).toThrow(
        RangeError
      );
    });
  });
});
