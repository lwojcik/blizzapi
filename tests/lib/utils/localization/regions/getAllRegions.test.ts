import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { getAllRegions } = utils;

describe("getAllRegions()", () => {
  it("should be defined", () => {
    expect(getAllRegions).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllRegions).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllRegions()).toBeTruthy();
    expect(typeof getAllRegions()).toBe("object");
  });

  it("returned object should match constants.REGIONS property", () => {
    expect(getAllRegions()).toMatchObject(constants.REGIONS);
  });
});
