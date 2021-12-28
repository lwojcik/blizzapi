import { ConstantKey, RegionId, RegionName } from "../../../../src/types";
import * as utils from "../../../../src/utils/common/index";

import regionNamesJson from "../../../__testData__/regionNames.json";
import wrongRegionNamesJson from "../../../__testData__/wrongRegionNames.json";
import regionIdsJson from "../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../__testData__/wrongRegionIds.json";
import constantKeysJson from "../../../__testData__/constantKeys.json";

const { getConstantByRegion } = utils;

describe("getConstantByRegion()", () => {
  it("should be defined", () => {
    expect(getConstantByRegion).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getConstantByRegion).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach((constantKey) => {
      it(`should return correct value for ${regionId} and ${constantKey} as valid parameters`, () => {
        expect(
          getConstantByRegion(regionId as RegionId, constantKey)
        ).toMatchSnapshot();
      });
    })
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (constantKeysJson as ReadonlyArray<ConstantKey>).forEach(
        (constantKey) => {
          it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
            expect(() =>
              getConstantByRegion(wrongRegionId as RegionId, constantKey)
            ).toThrow(RangeError);
          });
        }
      )
  );

  (regionNamesJson as ReadonlyArray<string>).forEach((regionName) =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach((constantKey) => {
      it(`should return correct value for ${regionName} as valid region name`, () => {
        expect(
          getConstantByRegion(regionName as RegionName, constantKey)
        ).toMatchSnapshot();
      });
    })
  );

  (wrongRegionNamesJson as ReadonlyArray<string>).forEach((wrongRegionName) =>
    (constantKeysJson as ReadonlyArray<ConstantKey>).forEach((constantKey) => {
      it(`should throw RangeError for ${wrongRegionName} as invalid region name`, () => {
        expect(() =>
          getConstantByRegion(wrongRegionName as RegionName, constantKey)
        ).toThrow(RangeError);
      });
    })
  );
});
