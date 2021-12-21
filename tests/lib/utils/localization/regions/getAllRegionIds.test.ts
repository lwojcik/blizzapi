import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { REGIONS } = constants;
const { getAllRegionIds } = utils;

describe("getAllRegionIds()", () => {
  it("should be defined", () => {
    expect(getAllRegionIds).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllRegionIds).toBe("function");
  });

  it("should return an array", () => {
    expect(typeof getAllRegionIds()).toBeTruthy();
    expect(getAllRegionIds().constructor === Array).toBe(true);
  });

  it("number of returned elements should match constants.REGIONS length", () => {
    expect(getAllRegionIds()).toHaveLength(Object.keys(REGIONS).length);
  });

  it("returned array elements should be integers", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isInteger = (element: any): boolean => typeof element === "number";
    expect(getAllRegionIds().every(isInteger)).toBe(true);
  });
});
