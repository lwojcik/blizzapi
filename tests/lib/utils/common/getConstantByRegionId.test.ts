import { RegionIdArray, ConstantKey } from "../../../../src/types";
import * as utils from "../../../../src/utils/common";

import regionIdsJson from "../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../__testData__/wrongRegionIds.json";
import constantKeysJson from "../../../__testData__/constantKeys.json";

const { getConstantByRegionId } = utils;

describe("getUriByRegionId()", () => {
  it("should be defined", () => {
    expect(getConstantByRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getConstantByRegionId).toBe("function");
  });

  (regionIdsJson as RegionIdArray).forEach((regionId) => {
    (constantKeysJson as ConstantKey[]).forEach((constantKey) => {
      it(`should return correct value for ${regionId} and ${constantKey} as valid parameters`, () => {
        expect(getConstantByRegionId(regionId, constantKey)).toMatchSnapshot();
      });
    });
  });

  (wrongRegionIdsJson as RegionIdArray).forEach((wrongRegionId) => {
    (constantKeysJson as ConstantKey[]).forEach((constantKey) => {
      it(`should throw RangeError for ${wrongRegionId} as invalid parameter`, () => {
        expect(() => getConstantByRegionId(wrongRegionId, constantKey)).toThrow(
          RangeError
        );
      });
    });
  });
});
