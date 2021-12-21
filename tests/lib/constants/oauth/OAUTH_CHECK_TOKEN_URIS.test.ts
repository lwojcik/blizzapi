import { constants } from "../../../../src/constants";

const { OAUTH_CHECK_TOKEN_URIS } = constants;

describe("OAUTH_CHECK_TOKEN_URIS", () => {
  it("should be defined", () => {
    expect(OAUTH_CHECK_TOKEN_URIS).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(OAUTH_CHECK_TOKEN_URIS)).toBe(true);
  });

  it("should match snapshot", () => {
    expect(OAUTH_CHECK_TOKEN_URIS).toMatchSnapshot();
  });
});
