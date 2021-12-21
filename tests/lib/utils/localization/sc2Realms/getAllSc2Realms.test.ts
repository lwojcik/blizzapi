import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { getAllSc2Realms } = utils;

describe("getAllSc2Realms()", () => {
  it("should be defined", () => {
    expect(getAllSc2Realms).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllSc2Realms).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllSc2Realms()).toBeTruthy();
    expect(typeof getAllSc2Realms()).toBe("object");
  });

  it("returned object should match constants.SC2_REALMS property", () => {
    expect(getAllSc2Realms()).toMatchObject(constants.SC2_REALMS);
  });
});
