import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { getAllLocales } = utils;

describe("getAllLocales()", () => {
  it("should be defined", () => {
    expect(getAllLocales).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllLocales).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllLocales()).toBeTruthy();
    expect(typeof getAllLocales()).toBe("object");
  });

  it("returned object should match constants.LOCALES property", () => {
    expect(getAllLocales()).toMatchObject(constants.LOCALES);
  });
});
