import { validateAccessToken } from "../../../../src/helpers/oauth";
import { RegionName } from "../../../../src/types";

jest.mock("../../../../src/helpers/fetch");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require("../../../../src/helpers/fetch");

fetch.fetchFromUri = jest
  .fn()
  .mockImplementation((options: { uri: string }) => {
    if (options.uri.includes("invalid_access_token")) {
      return {
        error: "invalid_token",
      };
    }
    if (options.uri.includes("access_token_with_api_error")) {
      throw new Error("invalid token");
    }
    return {
      data: "valid token",
    };
  });

describe("validateAccessToken()", () => {
  const region = "us" as RegionName;
  const validAccessToken = "valid_access_token";
  const invalidAccessToken = "invalid_access_token";
  const accessTokenWithApiError = "access_token_with_api_error";

  it("should be defined", () => {
    expect(validateAccessToken).toBeDefined();
  });

  it("should be function", () => {
    expect(validateAccessToken).toBeTruthy();
    expect(typeof validateAccessToken).toBe("function");
  });

  it("returns true for valid access token", async () => {
    expect.assertions(1);
    const response = await validateAccessToken(region, validAccessToken);
    expect(response).toMatchSnapshot();
  });

  it("returns false for invalid access token", async () => {
    expect.assertions(1);
    const response = await validateAccessToken(region, invalidAccessToken);
    expect(response).toMatchSnapshot();
  });

  it("returns false in case of API error", async () => {
    expect.assertions(1);
    const response = await validateAccessToken(region, accessTokenWithApiError);
    expect(response).toMatchSnapshot();
  });
});
