/* eslint-disable max-classes-per-file */
import { BattleNetAPI } from "../../../../src/classes/abstract/BattleNetAPI";
import { RegionName } from "../../../../src/types";

jest.createMockFromModule("../../../../src/classes/abstract/BattleNetAPI");

class BattleNetAPIMock extends BattleNetAPI {
  constructor(accessToken?: string) {
    super({
      accessToken,
      region: "us" as RegionName,
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

class BattleNetAPIMockWithoutClientId extends BattleNetAPI {
  constructor(accessToken?: string) {
    super({
      accessToken,
      region: "us",
    });
  }

  // eslint-disable-next-line class-methods-use-this
  query = (uri: string) => ({
    status: "ok",
    uri,
  });
}

class BattleNetAPIMockWithoutClientSecret extends BattleNetAPI {
  constructor(accessToken?: string) {
    super({
      accessToken,
      clientId: "test-client-id",
      region: "us",
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

  it("should save accessTokenObject as undefined", () => {
    expect(new BattleNetAPIMock().accessTokenObject).toMatchSnapshot();
  });

  it("should set access token", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.setAccessTokenObject();
    expect(response).toMatchSnapshot();
  });

  it("should throw error while setting access token if no client id is provided", () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMockWithoutClientId();

    expect(async () => {
      await bnetApi.setAccessTokenObject();
    }).rejects.toThrowError(
      "Cannot get access token because no Battle.net client id was provided"
    );
  });

  it("should throw error while setting access token if no client secret is provided", () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMockWithoutClientSecret();

    expect(async () => {
      await bnetApi.setAccessTokenObject();
    }).rejects.toThrowError(
      "Cannot get access token because no Battle.net client secret was provided"
    );
  });

  it("should get access token", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.getAccessToken();
    expect(response).toMatchSnapshot();
  });

  it("should get access token object", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.getAccessTokenObject();
    expect(response).toMatchSnapshot();
  });

  it("should set access token", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.setAccessToken();
    expect(response).toMatchSnapshot();
  });

  it("should set access token object", async () => {
    expect.assertions(1);
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.setAccessTokenObject();
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
      "us" as RegionName,
      "valid_access_token"
    );
    expect(response).toMatchSnapshot();
  });
});
