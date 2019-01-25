import { RegionIdOrName, ClientId, ClientSecret, /* Options, */Endpoint, Endpoints, AccessToken } from '../types';
import { QueryBatchOptions } from '../interfaces';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import { getTokenUriByRegion } from '../utils/oauth/tokenUris';

export default class BattleNetApi {
  private region: RegionIdOrName;
  private clientId: ClientId;
  private clientSecret: ClientSecret;
  private accessToken: AccessToken;
  // options:
  // validateAccessTokenOnEachQuery - bool
  // refreshAccessToken - bool - should access token be automatically if bnet responds with 403
  // onAccessTokenRefresh - fn to run after access token is fetched
  // onAccessTokenInvalid - fn to run if bnet responds with 403

  constructor(region: RegionIdOrName, clientId:ClientId, clientSecret:ClientSecret, accessToken?: AccessToken) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken || '';
  }

  private async getAccessToken() {
    return this.accessToken === '' ? await this.obtainAccessToken() : this.accessToken;
  }

  private async obtainAccessToken() {
    try {
      const tokenUri = getTokenUriByRegion(this.region);
      const accessToken = await oauthHelpers.getAccessToken(tokenUri, this.clientId, this.clientSecret);
      this.accessToken = accessToken;
      return accessToken;
    } catch (error) {
      throw `Error while getting access token: ${error}`;
    }
  }

  async query(endpoint:Endpoint) {
    try {
      const accessToken = await this.getAccessToken();
      console.log(accessToken);
      const response = await bnetHelpers.queryEndpoint(this.region, endpoint, accessToken);
      return response;
    } catch (error) {
      throw `Error querying endpoint ${endpoint}: ${error}`;
    }
  }

  async queryBatch(endpoints:Endpoints, queryBatchOptions:QueryBatchOptions) {
    try {
      const accessToken = await this.getAccessToken();
      const response = await bnetHelpers.queryBatch(this.region, endpoints, queryBatchOptions, accessToken);
      return response;
    } catch (error) {
      throw `Error querying endpoint batch: ${error}`;
    }
  }
}
