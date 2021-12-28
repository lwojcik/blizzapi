import * as utils from "../../../../../src/utils";
import { Sc2Realm, RegionId } from "../../../../../src/types";

import regionIdsJson from "../../../../__testData__/regionIds.json";
import wrongRegionIdsJson from "../../../../__testData__/wrongRegionIds.json";
import sc2realmsJson from "../../../../__testData__/sc2realms.json";
import nonexistentSc2realmsJson from "../../../../__testData__/nonexistentSc2realms.json";
import wrongSc2realmsJson from "../../../../__testData__/wrongSc2realms.json";

const { isSc2RealmValidForRegionId } = utils;

describe("isSc2RealmValidForRegionId()", () => {
  it("should be defined", () => {
    expect(isSc2RealmValidForRegionId).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof isSc2RealmValidForRegionId).toBe("function");
  });

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) =>
    (sc2realmsJson as ReadonlyArray<number | string>).forEach((sc2realm) => {
      it(`should return correct value for ${regionId} and ${sc2realm} as valid parameters`, () => {
        expect(
          isSc2RealmValidForRegionId(sc2realm as Sc2Realm, regionId as RegionId)
        ).toMatchSnapshot();
      });
    })
  );

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) =>
    (nonexistentSc2realmsJson as ReadonlyArray<number | string>).forEach(
      (nonexistentSc2realm) => {
        it(`should return false for ${regionId} as valid region id and ${nonexistentSc2realm} as non-existent SC2 realm`, () => {
          expect(
            isSc2RealmValidForRegionId(
              nonexistentSc2realm as Sc2Realm,
              regionId as RegionId
            )
          ).toBe(false);
        });
      }
    )
  );

  (regionIdsJson as ReadonlyArray<number | string>).forEach((regionId) =>
    (wrongSc2realmsJson as ReadonlyArray<number | string>).forEach(
      (wrongSc2realm) => {
        it(`should throw RangeError for ${regionId} as valid region id and ${wrongSc2realm} as invalid SC2 realm`, () => {
          expect(() =>
            isSc2RealmValidForRegionId(
              wrongSc2realm as Sc2Realm,
              regionId as RegionId
            )
          ).toThrow(RangeError);
        });
      }
    )
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (sc2realmsJson as ReadonlyArray<number | string>).forEach((sc2realm) => {
        it(`should throw RangeError for ${wrongRegionId} as wrong region id and ${sc2realm} as valid SC2 realm`, () => {
          expect(() =>
            isSc2RealmValidForRegionId(
              sc2realm as Sc2Realm,
              wrongRegionId as RegionId
            )
          ).toThrow(RangeError);
        });
      })
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (nonexistentSc2realmsJson as ReadonlyArray<number | string>).forEach(
        (nonexistentSc2realm) => {
          it(`should throw RangeError for ${wrongRegionId} as wrong region id and ${nonexistentSc2realm} as non-existent SC2 realm`, () => {
            expect(() =>
              isSc2RealmValidForRegionId(
                nonexistentSc2realm as Sc2Realm,
                wrongRegionId as RegionId
              )
            ).toThrow(RangeError);
          });
        }
      )
  );

  (wrongRegionIdsJson as ReadonlyArray<number | string>).forEach(
    (wrongRegionId) =>
      (wrongSc2realmsJson as ReadonlyArray<number | string>).forEach(
        (wrongSc2realm) => {
          it(`should throw RangeError for ${wrongRegionId} as wrong region id and ${wrongSc2realm} as invalid SC2 realm`, () => {
            expect(() =>
              isSc2RealmValidForRegionId(
                wrongSc2realm as Sc2Realm,
                wrongRegionId as RegionId
              )
            ).toThrow(RangeError);
          });
        }
      )
  );
});
