import {
  RegionIdOrName,
  ClientId,
  ClientSecret,
  /* Options, */ Endpoint,
  Endpoints,
  AccessToken,
  Selector,
  EndpointsWithSelectors,
} from '../types';
import /*QueryBatchOptions*/ '../interfaces';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import { searchObjectBySelector } from '../helpers/json';
import { getTokenUriByRegion } from '../utils/oauth/tokenUris';

/* tslint:disable:no-class no-this no-expression-statement no-object-mutation readonly-keyword typedef */

export default class BattleNetApi {
  private readonly region: RegionIdOrName;
  private readonly clientId: ClientId;
  private readonly clientSecret: ClientSecret;
  private accessToken: AccessToken;
  // options:
  // validateAccessTokenOnEachQuery - bool
  // refreshAccessToken - bool - should access token be automatically if bnet responds with 403
  // onAccessTokenRefresh - fn to run after access token is fetched
  // onAccessTokenInvalid - fn to run if bnet responds with 403

  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
  ) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken || '';
  }

  private async getAccessToken() {
    return this.accessToken.length === 0 ? await this.setAccessToken() : this.accessToken;
  }

  private async setAccessToken() {
    const tokenUri = getTokenUriByRegion(this.region);
    const accessToken = await oauthHelpers.getAccessToken(
      tokenUri,
      this.clientId,
      this.clientSecret,
    );
    this.accessToken = accessToken;
    return accessToken;
  }

  async query(endpoint: Endpoint) {
    const accessToken = await this.getAccessToken();
    return bnetHelpers.queryEndpoint(this.region, endpoint, accessToken);
  }

  async querySearch(endpoint: Endpoint, selector: Selector) {
    const response = await this.query(endpoint);
    return selector ? searchObjectBySelector(response, selector) : response;
  }

  async queryBatch(endpoints: Endpoints) {
    const accessToken = await this.getAccessToken();
    return bnetHelpers.queryBatch(this.region, endpoints, accessToken);
  }

  async querySearchBatch(endpointsWithSelectors: EndpointsWithSelectors) {
    const accessToken = await this.getAccessToken();
    return bnetHelpers.querySearchBatch(this.region, endpointsWithSelectors, accessToken);
  }
}

/* tslint:disable:no-unnecessary-class no-this */
