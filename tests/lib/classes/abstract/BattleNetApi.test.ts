import { BattleNetAPI } from "../../../../src/classes/abstract/BattleNetAPI";

jest.createMockFromModule("../../../../src/classes/abstract/BattleNetAPI");

BattleNetAPI.prototype.getAccessToken = jest
  .fn()
  .mockImplementation(() =>
    Promise.resolve("valid_access_token_from_BattleNetAPIMock")
  );

class BattleNetAPIMock extends BattleNetAPI {
  constructor(accessToken?: string) {
    super({
      accessToken,
      region: "us",
      clientId: "valid_client_id_from_BattleNetAPIMock",
      clientSecret: "valid_client_secret_from_BattleNetAPIMock",
    });
  }

  // eslint-disable-next-line class-methods-use-this
  query = (uri: string) => ({
    status: "ok",
    uri,
  });
}

describe("BattleNetAPI class", () => {
  it("should be defined", () => {
    expect(BattleNetAPI).toBeDefined();
  });

  it("should define region property", () => {
    expect(new BattleNetAPIMock().region).toMatchSnapshot();
  });

  it("should define clientId property", () => {
    expect(new BattleNetAPIMock().clientId).toMatchSnapshot();
  });

  it("should define clientSecret property", () => {
    expect(new BattleNetAPIMock().clientSecret).toMatchSnapshot();
  });

  it("should save accessToken as undefined", () => {
    expect(new BattleNetAPIMock().accessToken).toMatchSnapshot();
  });

  it("should set access token", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.setAccessToken();
    expect(response).toMatchSnapshot();
  });

  it("should get access token", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.getAccessToken();
    expect(response).toMatchSnapshot();
  });

  it("should get access token when provided by user", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock("valid_access_token");
    const response = await bnetApi.getAccessToken();
    expect(response).toMatchSnapshot();
  });

  it("should validate access token and return true", async () => {
    expect.assertions(1);
    const response = await BattleNetAPIMock.validateAccessToken(
      "us",
      "valid_access_token"
    );
    expect(response).toMatchSnapshot();
  });
});
