import * as utils from "../../../../../src/utils";

const { checkIfSc2RealmLooksValid } = utils;

describe("checkIfSc2RealmLooksValid()", () => {
  it("should be defined", () => {
    expect(checkIfSc2RealmLooksValid).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof checkIfSc2RealmLooksValid).toBe("function");
  });
});
