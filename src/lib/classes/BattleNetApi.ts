import jsonata = require('jsonata');
import { RegionIdOrName, ClientId, ClientSecret, /* Options, */Endpoint, Endpoints, AccessToken, JSONSelector } from '../types';
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
    const tokenUri = getTokenUriByRegion(this.region);
    const accessToken = await oauthHelpers.getAccessToken(tokenUri, this.clientId, this.clientSecret);
    this.accessToken = accessToken;
    return accessToken;
  }

  async query(endpoint:Endpoint) {
    const accessToken = await this.getAccessToken();
    const response = await bnetHelpers.queryEndpoint(this.region, endpoint, accessToken);
    return response;
  }

  async querySearch(endpoint:Endpoint, selector: JSONSelector) {
    const response = await this.query(endpoint);
    return jsonata(selector).evaluate(response);
  }

  async queryBatch(endpoints:Endpoints, queryBatchOptions:QueryBatchOptions) {
      const accessToken = await this.getAccessToken();
      const response = await bnetHelpers.queryBatch(this.region, endpoints, queryBatchOptions, accessToken);
      return response;
  }

  // queryAndParseBatch(endpoints:Endpoints, selectors:SelectorArray)
}
