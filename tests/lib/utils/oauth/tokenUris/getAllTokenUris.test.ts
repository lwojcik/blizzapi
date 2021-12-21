import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { getAllTokenUris } = utils;

describe("getApiHosts()", () => {
  it("should be defined", () => {
    expect(getAllTokenUris).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllTokenUris).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllTokenUris()).toBeTruthy();
    expect(typeof getAllTokenUris()).toBe("object");
  });

  it("returned object should match constants.OAUTH_TOKEN_URIS property", () => {
    expect(getAllTokenUris()).toMatchObject(constants.OAUTH_TOKEN_URIS);
  });
});
