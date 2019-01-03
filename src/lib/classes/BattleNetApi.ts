import { RegionIdOrName, ClientId, ClientSecret, AccessToken, Options } from '../types';
import * as oauth from '../helpers/oauth';
import * as tokenUris from '../utils/oauth/tokenUris';

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

  query(endpoint:string) {
    console.log(endpoint);
    console.log(this.accessToken);
    return 'response';
  }

  private fetchAccessToken(region: RegionIdOrName, clientId:ClientId, clientSecret: ClientSecret) {
    const tokenUri = tokenUris.getTokenUriByRegionIdOrName(region);
    this.accessToken = oauth.fetchAccessToken(tokenUri, clientId, clientSecret);
  }
}
