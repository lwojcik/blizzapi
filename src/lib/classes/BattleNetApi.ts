import { RegionIdOrName, ClientId, ClientSecret, AccessToken, Options, Endpoint } from '../types';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import * as tokenUriUtils from '../utils/oauth/tokenUris';

export default class BattleNetApi {
  region: RegionIdOrName;
  clientId: ClientId;
  clientSecret: ClientSecret;
  options: Options;
  private accessToken: AccessToken;

  constructor(region: RegionIdOrName, clientId:ClientId, clientSecret:ClientSecret, options?: Options) {
    console.log('constructing BattleNetApi class object');
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = '';
    this.options = options;
  }

  connect() {
    console.log('Bnet Api class connect');
    this.fetchAccessToken(this.region, this.clientId, this.clientSecret);
  }

  query(endpoint:Endpoint) {
    return bnetHelpers.queryEndpoint(this.region, endpoint, this.accessToken);
  }

  private fetchAccessToken(region: RegionIdOrName, clientId:ClientId, clientSecret: ClientSecret) {
    const tokenUri = tokenUriUtils.getTokenUriByRegionIdOrName(region);
    this.accessToken = oauthHelpers.fetchAccessToken(tokenUri, clientId, clientSecret);
  }
}
