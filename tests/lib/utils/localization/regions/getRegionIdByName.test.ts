import * as utils from "../../../../../src/utils";
import { RegionName } from "../../../../../src/types";

import regionNamesJson from "../../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../../__testData__/wrongRegionNames.json";

const { getRegionIdByName } = utils;

describe("getRegionIdByName()", () => {
  it("should be defined", () => {
    expect(getRegionIdByName).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getRegionIdByName).toBe("function");
  });

  (regionNamesJson as ReadonlyArray<RegionName>).forEach((regionName) =>
    it(`should return correct value for ${regionName} as valid region name`, () => {
      expect(getRegionIdByName(regionName)).toMatchSnapshot();
    })
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) =>
    it(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
      expect(() => getRegionIdByName(wrongRegionName as RegionName)).toThrow(
        RangeError
      );
    })
  );
});
