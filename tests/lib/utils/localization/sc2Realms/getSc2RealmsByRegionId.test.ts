import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";

const { SC2_REALMS } = constants;
const { getSc2RealmsByRegionId } = utils;

describe("getSc2RealmsByRegionId()", () => {
  it("should be defined", () => {
    expect(getSc2RealmsByRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getSc2RealmsByRegionId).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) =>
    it(`should return correct value for ${regionId} as valid region id`, () => {
      expect(getSc2RealmsByRegionId(regionId)).toBe(SC2_REALMS[regionId]);
    })
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      it(`should throw RangeError for ${wrongRegionId} as invalid region id`, () => {
        expect(() => getSc2RealmsByRegionId(wrongRegionId)).toThrow(RangeError);
      })
  );
});
