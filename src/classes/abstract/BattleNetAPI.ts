import { OAuth2API } from "./OAuth2API";
import * as OAuthHelpers from "../../helpers/oauth";
import {
  RegionIdOrName,
  AccessToken,
  BattleNetOptions,
  AccessTokenObject,
} from "../../types";

export abstract class BattleNetAPI extends OAuth2API {
  region: RegionIdOrName;

  accessTokenObject: AccessTokenObject | undefined;

  constructor(options: BattleNetOptions) {
    super(options.clientId, options.clientSecret);
    this.region = options.region;
    this.accessTokenObject = options.accessToken
      ? {
          access_token: options.accessToken,
        }
      : undefined;
  }

  getAccessToken = async () => {
    const accessTokenObject = await this.getAccessTokenObject();
    return accessTokenObject.access_token;
  };

  getAccessTokenObject = () =>
    this.accessTokenObject
      ? Promise.resolve(this.accessTokenObject)
      : this.setAccessTokenObject();

  setAccessToken() {
    return this.setAccessTokenObject();
  }

  async setAccessTokenObject() {
    this.accessTokenObject = await this.getAccessTokenObjectFromBnet();
    return this.accessTokenObject;
  }

  static validateAccessToken = (
    region: RegionIdOrName,
    accessToken: AccessToken
  ) => OAuthHelpers.validateAccessToken(region, accessToken);

  private getAccessTokenObjectFromBnet = async () =>
    OAuthHelpers.getAccessTokenObject({
      region: this.region,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });
}
