import { fetchAccessToken } from "../../../../src/helpers/oauth";

describe("fetchAccessToken()", () => {
  const oauthUri = "http://sample.oauth.uri/";
  const clientId = "sample_client_id";
  const clientSecret = "sample_client_secret";

  it("should be defined", () => {
    expect(fetchAccessToken).toBeDefined();
  });

  it("should be function", () => {
    expect(fetchAccessToken).toBeTruthy();
    expect(typeof fetchAccessToken).toBe("function");
  });

  it("returns correct response for GET request to a valid uri", async () => {
    expect.assertions(1);
    const response = await fetchAccessToken({
      oauthUri,
      clientId,
      clientSecret,
    });
    expect(response).toMatchSnapshot();
  });
});
