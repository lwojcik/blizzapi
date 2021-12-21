import { getAccessToken } from "../../../../src/helpers/oauth";

describe("getAccessToken()", () => {
  const region = "us";
  const clientId = "sample client id";
  const clientSecret = "sample client secret";

  it("should be defined", () => {
    expect(getAccessToken).toBeDefined();
  });

  it("should be function", () => {
    expect(getAccessToken).toBeTruthy();
    expect(typeof getAccessToken).toBe("function");
  });

  it("returns correct response for GET request to a valid uri", async () => {
    expect.assertions(1);
    const response = await getAccessToken({ region, clientId, clientSecret });
    expect(response).toMatchSnapshot();
  });
});
