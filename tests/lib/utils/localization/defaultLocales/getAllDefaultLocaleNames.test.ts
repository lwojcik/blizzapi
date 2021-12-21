import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { REGIONS } = constants;
const { getAllDefaultLocaleNames } = utils;

describe("getAllDefaultLocales()", () => {
  it("should be defined", () => {
    expect(getAllDefaultLocaleNames).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllDefaultLocaleNames).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllDefaultLocaleNames()).toBeTruthy();
    expect(typeof getAllDefaultLocaleNames()).toBe("object");
  });

  it("returned object should be of the same size as constants.REGIONS", () => {
    const localeNamesLength = Object.keys(getAllDefaultLocaleNames()).length;
    const regionsLength = Object.keys(REGIONS).length;
    expect(localeNamesLength).toStrictEqual(regionsLength);
  });

  it("object values should be derived from constants.LOCALES", () => {
    const receivedLocaleNames = Object.values(getAllDefaultLocaleNames());
    const expectedLocaleNames = ([] as ReadonlyArray<string>).concat(
      ...Object.values(constants.LOCALES)
    );

    receivedLocaleNames.forEach((localeName) => {
      expect(expectedLocaleNames).toContain(localeName);
    });
  });
});
