import { BlizzAPI } from "../../../src/classes/BlizzAPI";
import { RegionName } from "../../../src/types";

describe("BlizzAPI class", () => {
  it("should be defined", () => {
    expect.assertions(1);
    expect(BlizzAPI).toBeDefined();
  });

  it("should define query method", () => {
    expect.assertions(1);
    expect(
      new BlizzAPI({
        region: "" as RegionName,
        clientId: "",
        clientSecret: "",
      }).query
    ).toBeDefined();
  });

  it("should define getAccessToken method", () => {
    expect.assertions(1);
    expect(
      new BlizzAPI({
        region: "" as RegionName,
        clientId: "",
        clientSecret: "",
      }).getAccessToken
    ).toBeDefined();
  });

  it("should define validateAccessToken static method", () => {
    expect(BlizzAPI.validateAccessToken).toBeDefined();
  });

  it("should define getAllRegions static method", () => {
    expect(BlizzAPI.getAllRegions).toBeDefined();
  });

  it("should define getAllRegionIds static method", () => {
    expect(BlizzAPI.getAllRegionIds).toBeDefined();
  });

  it("should define getAllRegionNames static method", () => {
    expect.assertions(1);
    expect(BlizzAPI.getAllRegionNames).toBeDefined();
  });

  it("should define getRegionNameById static method", () => {
    expect.assertions(1);
    expect(BlizzAPI.getRegionNameById).toBeDefined();
  });

  it("should define validateRegionId static method", () => {
    expect(BlizzAPI.validateRegionId).toBeDefined();
  });

  it("should define getRegionIdByName static method", () => {
    expect(BlizzAPI.getRegionIdByName).toBeDefined();
  });

  it("should define validateRegionName static method", () => {
    expect(BlizzAPI.validateRegionName).toBeDefined();
  });

  it("should define getAllLocales static method", () => {
    expect(BlizzAPI.getAllLocales).toBeDefined();
  });

  it("should define getAllLocaleNames static method", () => {
    expect(BlizzAPI.getAllLocaleNames).toBeDefined();
  });

  it("should define getLocalesByRegionId static method", () => {
    expect(BlizzAPI.getLocalesByRegionId).toBeDefined();
  });

  it("should define checkIfLocaleLooksValid static method", () => {
    expect(BlizzAPI.checkIfLocaleLooksValid).toBeDefined();
  });

  it("should define validateLocale static method", () => {
    expect(BlizzAPI.validateLocale).toBeDefined();
  });

  it("should define isLocaleValidForRegionId static method", () => {
    expect(BlizzAPI.isLocaleValidForRegionId).toBeDefined();
  });

  it("should define getAllSc2Realms static method", () => {
    expect(BlizzAPI.isLocaleValidForRegionId).toBeDefined();
  });

  it("should define getAllAvailableSc2Realms static method", () => {
    expect(BlizzAPI.getAllAvailableSc2Realms).toBeDefined();
  });

  it("should define getSc2RealmsByRegionId static method", () => {
    expect(BlizzAPI.getSc2RealmsByRegionId).toBeDefined();
  });

  it("should define checkIfSc2RealmLooksValid static method", () => {
    expect(BlizzAPI.checkIfSc2RealmLooksValid).toBeDefined();
  });

  it("should define validateSc2Realm static method", () => {
    expect(BlizzAPI.validateSc2Realm).toBeDefined();
  });

  it("should define isSc2RealmValidForRegionId static method", () => {
    expect(BlizzAPI.isSc2RealmValidForRegionId).toBeDefined();
  });

  it("should define getDefaultLocaleNameForRegionId static method", () => {
    expect(BlizzAPI.getDefaultLocaleNameForRegionId).toBeDefined();
  });

  it("should define getAllDefaultLocaleNames static method", () => {
    expect(BlizzAPI.getAllDefaultLocaleNames).toBeDefined();
  });

  it("should query an endpoint", async () => {
    expect.assertions(1);
    const bnetApi = new BlizzAPI({
      region: "us" as RegionName,
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
    });

    const response = await bnetApi.query("/sample/endpoint");
    expect(response).toMatchSnapshot();
  });

  it("should query from a different region", async () => {
    expect.assertions(1);
    const bnetApi = new BlizzAPI({
      region: "us" as RegionName,
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
    });

    const response = await bnetApi.query("/sample/endpoint", {
      region: "eu" as RegionName,
    });
    expect(response).toMatchSnapshot();
  });

  it("should validate access token and return true", async () => {
    expect.assertions(1);
    const response = await BlizzAPI.validateAccessToken(
      "us" as RegionName,
      "valid_access_token"
    );
    expect(response).toMatchSnapshot();
  });

  it("should set region", async () => {
    expect.assertions(1);
    const bnetApi = new BlizzAPI({
      region: "us" as RegionName,
      clientId: "valid_client_id",
      clientSecret: "valid_client_secret",
    });

    bnetApi.setRegion("eu");

    const response = await bnetApi.query("/sample/endpoint");
    expect(response).toMatchSnapshot();
  });
});
