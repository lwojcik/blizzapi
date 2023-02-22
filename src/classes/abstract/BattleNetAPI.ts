import { OAuth2API } from "./OAuth2API";
import * as OAuthHelpers from "../../helpers/oauth";
import { RegionIdOrName, AccessToken, BattleNetOptions } from "../../types";

export abstract class BattleNetAPI extends OAuth2API {
  region: RegionIdOrName;

  accessToken: AccessToken;

  constructor(options: BattleNetOptions) {
    super(options.clientId, options.clientSecret);
    this.region = options.region;
    this.accessToken = options.accessToken || undefined;
  }

  getAccessToken = () => this.accessToken || this.setAccessToken();

  setAccessToken = async () => {
    if (!this.clientId) {
      throw new Error(
        "Cannot get access token because no Battle.net client id was provided"
      );
    }
    if (!this.clientSecret) {
      throw new Error(
        "Cannot get access token because no Battle.net client secret was provided"
      );
    }

    this.accessToken = await OAuthHelpers.getAccessToken({
      region: this.region,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });
    return this.accessToken;
  };

  static validateAccessToken = (
    region: RegionIdOrName,
    accessToken: AccessToken
  ) => OAuthHelpers.validateAccessToken(region, accessToken);
}
