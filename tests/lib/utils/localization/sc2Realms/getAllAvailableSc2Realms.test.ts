import * as utils from "../../../../../src/utils";

const { getAllAvailableSc2Realms } = utils;

describe("getAllAvailableSc2Realms()", () => {
  it("should be defined", () => {
    expect(getAllAvailableSc2Realms).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllAvailableSc2Realms).toBe("function");
  });

  it("should return an array", () => {
    expect(typeof getAllAvailableSc2Realms).toBeTruthy();
    expect(getAllAvailableSc2Realms().constructor === Array).toBe(true);
  });

  it("should return numbers in an array", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isInteger = (element: any): boolean => typeof element === "number";
    expect(getAllAvailableSc2Realms().every(isInteger)).toBe(true);
  });
});
