import { OAuth2API } from './OAuth2API';
import * as OAuthHelpers from '../../helpers/oauth';
import {
  RegionIdOrName,
  AccessToken,
  BattleNetOptions,
} from '../../types';

export abstract class BattleNetAPI extends OAuth2API {
  readonly region: RegionIdOrName;

  accessToken: AccessToken;

  constructor(options: BattleNetOptions) {
    super(options.clientId, options.clientSecret);
    this.region = options.region;
    this.accessToken = options.accessToken || undefined;
  }

  getAccessToken = () => (this.accessToken || this.setAccessToken());

  setAccessToken = async () => {
    this.accessToken = await OAuthHelpers.getAccessToken({
      region: this.region,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });
    return this.accessToken;
  };

  static validateAccessToken = (region: RegionIdOrName, accessToken: AccessToken) =>
    OAuthHelpers.validateAccessToken(region, accessToken);
}
