import {
  RegionIdOrName,
  ClientId,
  ClientSecret,
  Endpoint,
  Endpoints,
  AccessToken,
  Selector,
  EndpointsWithSelectors,
} from '../types';
import { QueryBatchOptions } from '../interfaces';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import { getTokenUriByRegion } from '../utils/oauth/tokenUris';

/* tslint:disable:no-class no-this no-expression-statement no-object-mutation readonly-keyword typedef */

export default class BattleNetApi {
  private readonly region: RegionIdOrName;
  private readonly clientId: ClientId;
  private readonly clientSecret: ClientSecret;
  private accessToken: AccessToken;
  private options: QueryBatchOptions;
  // options:
  // validateAccessTokenOnEachQuery - bool
  // refreshAccessToken - bool - should access token be automatically if bnet responds with 403
  // onAccessTokenRefresh - fn to run after access token is fetched
  // onAccessTokenInvalid - fn to run if bnet responds with 401

  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
    options?: QueryBatchOptions,
  ) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken || null;
    this.options = (options as QueryBatchOptions) || {
      interval: 1000,
    };
  }

  private getAccessToken = () => (this.accessToken ? this.accessToken : this.setAccessToken());

  private setAccessToken = async () =>
    (this.accessToken = await oauthHelpers.getAccessToken(
      getTokenUriByRegion(this.region),
      this.clientId,
      this.clientSecret,
    ));

  query = async (endpoint: Endpoint) =>
    bnetHelpers.query(this.region, endpoint, await this.getAccessToken());

  querySearch = async (endpoint: Endpoint, selector: Selector) =>
    bnetHelpers.querySearch(this.region, endpoint, selector, await this.getAccessToken());

  queryBatch = async (endpoints: Endpoints) =>
    bnetHelpers.queryBatch(
      this.region,
      endpoints,
      await this.getAccessToken(),
      this.options.interval,
    );

  querySearchBatch = async (endpointsWithSelectors: EndpointsWithSelectors) =>
    bnetHelpers.querySearchBatch(this.region, endpointsWithSelectors, await this.getAccessToken());
}

/* tslint:disable:no-unnecessary-class no-this */
