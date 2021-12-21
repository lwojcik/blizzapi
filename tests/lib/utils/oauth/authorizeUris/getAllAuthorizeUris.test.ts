import * as utils from "../../../../../src/utils";
import { constants } from "../../../../../src/constants";

const { getAllAuthorizeUris } = utils;

describe("getAllAuthorizeUris()", () => {
  it("should be defined", () => {
    expect(getAllAuthorizeUris).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof getAllAuthorizeUris).toBe("function");
  });

  it("should return an object", () => {
    expect(typeof getAllAuthorizeUris()).toBeTruthy();
    expect(typeof getAllAuthorizeUris()).toBe("object");
  });

  it("returned object should match constants.OAUTH_AUTHORIZE_URIS property", () => {
    expect(getAllAuthorizeUris()).toMatchObject(constants.OAUTH_AUTHORIZE_URIS);
  });
});
