import { RegionIdOrName, ClientId, ClientSecret, AccessToken, Options, Endpoint } from '../types';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import * as tokenUriUtils from '../utils/oauth/tokenUris';

export default class BattleNetApi {
  region: RegionIdOrName;
  clientId: ClientId;
  clientSecret: ClientSecret;
  options: Options;
  private authorized: Boolean;
  private accessToken: AccessToken;

  constructor(region: RegionIdOrName, clientId:ClientId, clientSecret:ClientSecret, options?: Options) {
    console.log('constructing BattleNetApi class object');
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = '';
    this.authorized = false;
    this.options = options;
  }

  async connect() {
    console.log('Bnet Api class connect');
    await this.obtainAccessToken(this.region, this.clientId, this.clientSecret);
    console.log(this.accessToken);
  }

  async query(endpoint:Endpoint) {
    console.log('querying endpoint...');
    try {
      if (!this.authorized) {
        throw new Error('not connected yet!');
      }
      const response = await bnetHelpers.queryEndpoint(this.region, endpoint, this.accessToken);
      return response;
    } catch (error) {
      throw error;
    }
  }

  private async obtainAccessToken(region: RegionIdOrName, clientId:ClientId, clientSecret: ClientSecret) {
    try {
      const tokenUri = tokenUriUtils.getTokenUriByRegionIdOrName(region);
      const accessToken = await oauthHelpers.getAccessToken(tokenUri, clientId, clientSecret);
      this.accessToken = await accessToken;
      this.authorized = true;
    } catch (error) {
      throw error;
    }
  }
}
