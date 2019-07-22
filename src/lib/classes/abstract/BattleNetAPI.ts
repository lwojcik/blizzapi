import { RegionIdOrName, AccessToken } from '../../../../@types';
import OAuth2API from './OAuth2API';
import * as OAuthHelpers from '../../helpers/oauth';
import { BattleNetOptions } from '../../../../@interfaces/BattleNetOptions';

/* tslint:disable:no-this no-object-mutation */

export = class BattleNetAPI extends OAuth2API {
  readonly region: RegionIdOrName;
  accessToken: AccessToken;

  constructor(options: BattleNetOptions) {
    super(options.clientId, options.clientSecret);
    this.region = options.region;
    this.accessToken = options.accessToken || undefined;
  }

  readonly getAccessToken = () => (this.accessToken ? this.accessToken : this.setAccessToken());

  readonly setAccessToken = async () =>
    (this.accessToken = await OAuthHelpers.getAccessToken({
      region: this.region,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    }));

  static validateAccessToken = (region: RegionIdOrName, accessToken: AccessToken) =>
    OAuthHelpers.validateAccessToken(region, accessToken);
};

/* tslint:enable:no-this no-object-mutation */
