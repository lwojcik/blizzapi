import * as utils from "../../../../../src/utils";
import { RegionId, RegionName } from "../../../../../src/types";

import regionNamesJson from "../../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../../__testData__/wrongRegionNames.json";
import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { getApiHostByRegion } = utils;

describe("getApiHostByRegion()", () => {
  it("should be defined", () => {
    expect(getApiHostByRegion).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getApiHostByRegion).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<string | number>).forEach((regionId) => {
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getApiHostByRegion(regionId as RegionId)).toMatchSnapshot();
    });
  });

  (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach(
    (wrongRegionId) => {
      it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
        expect(() => getApiHostByRegion(wrongRegionId as RegionId)).toThrow(
          RangeError
        );
      });
    }
  );

  (regionNamesJson as ReadonlyArray<string>).forEach((regionName) => {
    it(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getApiHostByRegion(regionName as RegionName)).toMatchSnapshot();
    });
  });

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) => {
    it(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getApiHostByRegion(wrongRegionName as RegionName)).toThrow(
        RangeError
      );
    });
  });
});
