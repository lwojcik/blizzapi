import { RegionIdOrName, ClientId, ClientSecret, /* Options, */Endpoint, AccessToken } from '../types';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import * as tokenUriUtils from '../utils/oauth/tokenUris';

export default class BattleNetApi {
  private region: RegionIdOrName;
  private clientId: ClientId;
  private clientSecret: ClientSecret;
  private accessToken: AccessToken;

  constructor(region: RegionIdOrName, clientId:ClientId, clientSecret:ClientSecret, accessToken?: AccessToken) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken || '';
  }

  private async obtainAccessToken() {
    try {
      const tokenUri = tokenUriUtils.getTokenUriByRegionIdOrName(this.region);
      const accessToken = await oauthHelpers.getAccessToken(tokenUri, this.clientId, this.clientSecret);
      this.accessToken = accessToken;
      return accessToken;
    } catch (error) {
      throw `Error while getting access token: ${error}`;
    }
  }

  async query(endpoint:Endpoint) {
    try {
      const accessToken = this.accessToken === '' ? await this.obtainAccessToken() : this.accessToken;
      console.log(accessToken);
      const response = await bnetHelpers.queryEndpoint(this.region, endpoint, accessToken);
      return response;
    } catch (error) {
      throw `Error querying endpoint ${endpoint}: ${error}`;
    }
  }
}
