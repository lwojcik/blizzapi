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

  async connect() {
    console.log('Bnet Api class connect');
    try {
      await this.obtainAccessToken(this.region, this.clientId, this.clientSecret);
    } catch (err) {
      throw err;
    }
  }

  query(endpoint:Endpoint) {
    return bnetHelpers.queryEndpoint(this.region, endpoint, this.accessToken);
  }

  private async obtainAccessToken(region: RegionIdOrName, clientId:ClientId, clientSecret: ClientSecret) {
    console.log(`obtaining access token for ${clientId}`)
    try {
      const tokenUri = tokenUriUtils.getTokenUriByRegionIdOrName(region);
      const accessToken = await oauthHelpers.getAccessToken(tokenUri, clientId, clientSecret);
      console.log(accessToken);
      this.accessToken = await accessToken;
    } catch (error) {
      throw error;
    }
  }
}
