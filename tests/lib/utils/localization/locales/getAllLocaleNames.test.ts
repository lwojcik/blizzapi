import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { LOCALES } = constants;

const { getAllLocaleNames } = utils;

describe("getAllLocaleNames()", () => {
  it("should be defined", () => {
    expect(getAllLocaleNames).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllLocaleNames).toBe("function");
  });

  it("should return an array", () => {
    expect(typeof getAllLocaleNames).toBeTruthy();
    expect(getAllLocaleNames().constructor === Array).toBe(true);
  });

  it("number of returned elements should match length of constants.REGIONS values after flattening", () => {
    const flattenedLocaleNamesLength = <number>(
      ([] as ReadonlyArray<string>).concat(...Object.values(LOCALES)).length
    );
    expect(getAllLocaleNames()).toHaveLength(flattenedLocaleNamesLength);
  });
});
