import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { getAllCheckTokenUris } = utils;

describe("getAllCheckTokenUris()", () => {
  it("should be defined", () => {
    expect(getAllCheckTokenUris).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllCheckTokenUris).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllCheckTokenUris()).toBeTruthy();
    expect(typeof getAllCheckTokenUris()).toBe("object");
  });

  it("returned object should match constants.OAUTH_CHECK_TOKEN_URIS property", () => {
    expect(getAllCheckTokenUris()).toMatchObject(
      constants.OAUTH_CHECK_TOKEN_URIS
    );
  });
});
