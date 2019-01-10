import { RegionIdOrName, ClientId, ClientSecret, Options, Endpoint } from '../types';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import * as tokenUriUtils from '../utils/oauth/tokenUris';

export default class BattleNetApi {
  region: RegionIdOrName;
  clientId: ClientId;
  clientSecret: ClientSecret;
  options: Options;

  constructor(region: RegionIdOrName, clientId:ClientId, clientSecret:ClientSecret, options?: Options) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.options = options;
  }

  private async getAccessToken(region: RegionIdOrName, clientId:ClientId, clientSecret: ClientSecret) {
    try {
      const tokenUri = tokenUriUtils.getTokenUriByRegionIdOrName(region);
      const accessToken = await oauthHelpers.getAccessToken(tokenUri, clientId, clientSecret);
      return accessToken;
    } catch (error) {
      throw `Error while getting access token: ${error}`;
    }
  }

  private connect() {
    return this.getAccessToken(this.region, this.clientId, this.clientSecret);
  }

  async query(endpoint:Endpoint) {
    try {
      const accessToken = await this.connect();
      const isEndpointValid = bnetHelpers.validateEndpoint(endpoint);

      if (!isEndpointValid) {
        throw `Endpoint ${endpoint} is not valid.`;
      }

      const response = await bnetHelpers.queryEndpoint(this.region, endpoint, accessToken);
      return response;
    } catch (error) {
      throw `Error querying endpoint ${endpoint}: ${error}`;
    }
  }
}
