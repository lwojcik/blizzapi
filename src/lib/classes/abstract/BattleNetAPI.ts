import { ClientId, ClientSecret, RegionIdOrName, AccessToken } from '../../../../@types';
import OAuth2API from './OAuth2API';
import * as OAuthHelpers from '../../helpers/oauth';

/* tslint:disable:no-this no-expression-statement no-object-mutation readonly-keyword */

export = class BattleNetAPI extends OAuth2API {
  readonly region: RegionIdOrName;
  accessToken: AccessToken;

  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
  ) {
    super(clientId, clientSecret);
    this.region = region;
    this.accessToken = accessToken || undefined;
  }

  readonly getAccessToken = () => (this.accessToken ? this.accessToken : this.setAccessToken());

  readonly setAccessToken = async () =>
    (this.accessToken = await OAuthHelpers.getAccessToken(
      this.region,
      this.clientId,
      this.clientSecret,
    ));

  static validateAccessToken = async (region: RegionIdOrName, accessToken: AccessToken) =>
    OAuthHelpers.validateAccessToken(region, accessToken);
};

/* tslint:enable:no-this no-expression-statement no-object-mutation readonly-keyword */
