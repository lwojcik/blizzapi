import { ClientId, ClientSecret, RegionIdOrName, AccessToken } from '../../types';
import OAuth2API from './OAuth2API';
import { getTokenUriByRegion } from '../../utils/oauth/tokenUris';
import * as oauthHelpers from '../../helpers/oauth';

/* tslint:disable:no-class no-unnecessary-class no-this no-expression-statement no-object-mutation readonly-keyword */

export default abstract class BattleNetAPI extends OAuth2API {
  readonly region: RegionIdOrName;
  accessToken: AccessToken;

  /* istanbul ignore next */
  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
  ) {
    super(clientId, clientSecret);
    this.region = region;
    this.accessToken = accessToken || null;
  }

  /* istanbul ignore next */
  readonly getAccessToken = () => (this.accessToken ? this.accessToken : this.setAccessToken());

  /* istanbul ignore next */
  readonly setAccessToken = async () =>
    (this.accessToken = await oauthHelpers.getAccessToken(
      getTokenUriByRegion(this.region),
      this.clientId,
      this.clientSecret,
    ));

  /* istanbul ignore next */
  static validateAccessToken = async (region: RegionIdOrName, accessToken: AccessToken) =>
    oauthHelpers.validateAccessToken(region, accessToken);
}

/* tslint:enable:no-class no-unnecessary-class no-this no-expression-statement no-object-mutation readonly-keyword */
