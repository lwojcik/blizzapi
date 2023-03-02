import { getAccessTokenObject } from "../../../../src/helpers/oauth";
import { RegionName } from "../../../../src/types";

// TODO: Rewrite tests

describe("getAccessTokenObject()", () => {
  const region = "us" as RegionName;
  const clientId = "sample client id";
  const clientSecret = "sample client secret";

  it("should be defined", () => {
    expect(getAccessTokenObject).toBeDefined();
  });

  it("should be function", () => {
    expect(getAccessTokenObject).toBeTruthy();
    expect(typeof getAccessTokenObject).toBe("function");
  });

  it("returns correct response for GET request to a valid uri", async () => {
    expect.assertions(1);
    const response = await getAccessTokenObject({
      region,
      clientId,
      clientSecret,
    });
    expect(response).toMatchSnapshot();
  });

  it("throws an error if no client secret is provided", () => {
    expect.assertions(1);
    expect(async () => {
      await getAccessTokenObject({ region });
    }).rejects.toThrowError(
      "Cannot get access token because no Battle.net client id was provided"
    );
  });

  it("throws an error if no client secret is provided", () => {
    expect.assertions(1);
    expect(async () => {
      await getAccessTokenObject({ region, clientId });
    }).rejects.toThrowError(
      "Cannot get access token because no Battle.net client secret was provided"
    );
  });
});
