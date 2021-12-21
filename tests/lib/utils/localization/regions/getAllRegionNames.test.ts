import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { REGIONS } = constants;

const { getAllRegionNames } = utils;

describe("getAllRegionNames()", () => {
  it("should be defined", () => {
    expect(getAllRegionNames).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllRegionNames).toBe("function");
  });

  it("should return an array", () => {
    expect(typeof getAllRegionNames).toBeTruthy();
    expect(getAllRegionNames().constructor === Array).toBe(true);
  });

  it("number of returned elements should match length of constants.REGIONS values after flattening", () => {
    const flattenedRegionsLength = <number>(
      ([] as ReadonlyArray<string>).concat(...Object.values(REGIONS)).length
    );
    expect(getAllRegionNames()).toHaveLength(flattenedRegionsLength);
  });
});
