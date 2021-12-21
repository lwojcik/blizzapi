import { ConstantKey, RegionName } from "../../../../src/types";
import * as utils from "../../../../src/utils/common";

import regionNamesJson from "../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../__testData__/wrongRegionNames.json";
import constantKeysJson from "../../../__testData__/constantKeys.json";

const { getConstantByRegionName } = utils;

describe("getConstantByRegionName()", () => {
  it("should be defined", () => {
    expect(getConstantByRegionName).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getConstantByRegionName).toBe("function");
  });

  (regionNamesJson as ReadonlyArray<RegionName>).forEach((regionName) =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach((constantKey) => {
      it(`should return correct value for ${regionName} and ${constantKey} as valid parameters`, () => {
        expect(
          getConstantByRegionName(regionName, constantKey)
        ).toMatchSnapshot();
      });
    })
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach((constantKey) => {
      it(`should throw RangeError for ${wrongRegionName} and ${constantKey}`, () => {
        expect(() =>
          getConstantByRegionName(wrongRegionName as RegionName, constantKey)
        ).toThrow(RangeError);
      });
    })
  );
});
