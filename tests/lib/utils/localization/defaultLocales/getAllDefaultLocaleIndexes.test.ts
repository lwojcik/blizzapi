import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { DEFAULT_LOCALES } = constants;
const { getAllDefaultLocaleIndexes } = utils;

describe("getAllDefaultLocales()", () => {
  it("should be defined", () => {
    expect(getAllDefaultLocaleIndexes).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllDefaultLocaleIndexes).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllDefaultLocaleIndexes()).toBeTruthy();
    expect(typeof getAllDefaultLocaleIndexes()).toBe("object");
  });

  it("returned object should match constants.REGIONS property", () => {
    expect(getAllDefaultLocaleIndexes()).toMatchObject(DEFAULT_LOCALES);
  });
});
