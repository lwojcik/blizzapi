import { constants } from "../../../../src/constants";

const { OAUTH_AUTHORIZE_URIS } = constants;
describe("OAUTH_AUTHORIZE_URIS", () => {
  it("should be defined", () => {
    expect(OAUTH_AUTHORIZE_URIS).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(OAUTH_AUTHORIZE_URIS)).toBe(true);
  });
  it("should match snapshot", () => {
    expect(OAUTH_AUTHORIZE_URIS).toMatchSnapshot();
  });
});
