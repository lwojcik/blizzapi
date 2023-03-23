import { query } from "../../../../src/helpers/bnet/query";
import { RegionName } from "../../../../src/types";

jest.mock("../../../../src/helpers/oauth");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const oauth = require("../../../../src/helpers/oauth");

oauth.validateAccessToken = jest
  .fn()
  // eslint-disable-next-line no-empty-pattern
  .mockImplementation(({}, accessToken: string) => {
    if (accessToken === "invalid_access_token") return Promise.resolve(false);
    return Promise.resolve(true);
  });

oauth.getAccessTokenObject = jest.fn().mockImplementation(() =>
  Promise.resolve({
    access_token: "new_refreshed_access_token",
  })
);

describe("query()", () => {
  it("should be defined", () => {
    expect(query).toBeDefined();
  });

  it("should be function", () => {
    expect(query).toBeTruthy();
    expect(typeof query).toBe("function");
  });

  it("returns correct response for GET request to a valid uri", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/sc2/sample/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "valid_access_token",
      options: {
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("returns correct response for GET request with params to a valid uri", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/sc2/sample/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "valid_access_token",
      options: {
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
        params: {
          data: "test params",
        },
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("rejects and throws RangeError for invalid endpoint", async () => {
    expect.assertions(1);
    expect(
      query({
        region: "us" as RegionName,
        endpoint: "invalidEndpoint",
        clientId: "valid_client_id",
        clientSecret: "valid_client_secret",
        accessToken: "valid_access_token",
        options: {
          validateAccessTokenOnEachQuery: false,
          refreshExpiredAccessToken: false,
          onAccessTokenExpired: undefined,
          onAccessTokenRefresh: undefined,
        },
      })
    ).rejects.toThrow(RangeError);
  });

  it("validates access token if validateAccessTokenOnEachQuery is set to true", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "valid_access_token",
      options: {
        validateAccessTokenOnEachQuery: true,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
      },
    });

    expect(response).toMatchSnapshot();
  });

  it("returns error if validateAccessTokenOnEachQuery is set to true and access token is invalid", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        validateAccessTokenOnEachQuery: true,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("refreshes expired access token if validateAccessTokenOnEachQuery is set to true and refreshExpiredAccessToken is set to true", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        validateAccessTokenOnEachQuery: true,
        refreshExpiredAccessToken: true,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("calls onAccessTokenExpired if validateAccessTokenOnEachQuery is set to true and onAccessTokenExpired is provided", async () => {
    expect.assertions(1);
    const onAccessTokenExpired = jest.fn();

    await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        validateAccessTokenOnEachQuery: true,
        refreshExpiredAccessToken: true,
        onAccessTokenExpired,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(onAccessTokenExpired).toHaveBeenCalledTimes(1);
  });

  it("returns error if validateAccessTokenOnEachQuery is set to false and access token is invalid", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("calls onAccessTokenExpired() if provided and access token is invalid", async () => {
    expect.assertions(2);
    const onAccessTokenExpired = jest.fn();
    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        onAccessTokenExpired,
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: false,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(response).toMatchSnapshot();
    expect(onAccessTokenExpired).toHaveBeenCalledTimes(1);
  });

  it("refreshes access token if refreshExpiredAccessToken is set to true", async () => {
    expect.assertions(1);
    const response = await query({
      region: "us",
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: true,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh: undefined,
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("calls onAccessTokenRefresh() if provided and refreshExpiredAccessToken is set to true", async () => {
    expect.assertions(2);
    const onAccessTokenRefresh = jest.fn();

    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "invalid_access_token",
      options: {
        onAccessTokenRefresh,
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: true,
        onAccessTokenExpired: undefined,
      },
    });
    expect(response).toMatchSnapshot();
    expect(onAccessTokenRefresh).toHaveBeenCalledTimes(1);
  });

  it("respects timeout option", async () => {
    expect.assertions(1);

    const response = await query({
      region: "us" as RegionName,
      endpoint: "/valid/endpoint",
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
      accessToken: "valid_access_token",
      options: {
        timeout: 123456,
      },
    });
    expect(response).toMatchSnapshot();
  });
});
