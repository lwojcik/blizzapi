import { OAuth2API } from "../../../../src/classes/abstract/OAuth2API";

class OAuth2APIMock extends OAuth2API {
  constructor() {
    super("foo", "bar");
  }

  // eslint-disable-next-line class-methods-use-this
  query = (uri: string) => ({
    status: "ok",
    uri,
  });
}

describe("OAuth2API class", () => {
  it("should be defined", () => {
    expect(OAuth2API).toBeDefined();
  });

  it("should define clientId property", () => {
    expect(new OAuth2APIMock().clientId).toBe("foo");
  });

  it("should define clientSecret property", () => {
    expect(new OAuth2APIMock().clientSecret).toBe("bar");
  });

  it("should implement query method", () => {
    expect(new OAuth2APIMock().query).toBeDefined();
  });
});
