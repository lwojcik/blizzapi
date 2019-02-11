import {
  RegionIdOrName,
  ClientId,
  ClientSecret,
  Endpoint,
  Endpoints,
  AccessToken,
  Selector,
  EndpointsWithSelectors,
  RegionIdAsNumberOrString,
} from '../types';
import { QueryOptions } from '../interfaces';
import * as oauthHelpers from '../helpers/oauth';
import * as bnetHelpers from '../helpers/bnet';
import * as utils from '../utils';
import { getTokenUriByRegion } from '../utils/oauth/tokenUris';

/* tslint:disable:no-class no-this no-expression-statement no-object-mutation readonly-keyword typedef */

export default class BattleNetApi {
  private readonly region: RegionIdOrName;
  private readonly clientId: ClientId;
  private readonly clientSecret: ClientSecret;
  private accessToken: AccessToken;
  private readonly options: QueryOptions;

  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
    options?: QueryOptions,
  ) {
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken || null;
    this.options = (options as QueryOptions) || {
      batchQueryInterval: 1000, // interval between subsequent batch queries
      validateAccessToken: false, // whether access token should be validated
      onAccessTokenInvalid: null, // function to run when access token is invalid
      onAccessTokenRefresh: null, // function to run when access token is refreshed
    };
  }

  private getAccessToken = () => (this.accessToken ? this.accessToken : this.setAccessToken());

  private setAccessToken = async () =>
    (this.accessToken = await oauthHelpers.getAccessToken(
      getTokenUriByRegion(this.region),
      this.clientId,
      this.clientSecret,
    ));

  query = async (endpoint: Endpoint, options = this.options) =>
    bnetHelpers.query(this.region, endpoint, await this.getAccessToken(), options);

  querySearch = async (endpoint: Endpoint, selector: Selector, options = this.options) =>
    bnetHelpers.querySearch(this.region, endpoint, selector, await this.getAccessToken(), options);

  queryBatch = async (endpoints: Endpoints, options = this.options) =>
    bnetHelpers.queryBatch(this.region, endpoints, await this.getAccessToken(), options);

  querySearchBatch = async (
    endpointsWithSelectors: EndpointsWithSelectors,
    options = this.options,
  ) =>
    bnetHelpers.querySearchBatch(
      this.region,
      endpointsWithSelectors,
      await this.getAccessToken(),
      options,
    );

  static validateAccessToken = async (region: RegionIdOrName, accessToken: AccessToken) =>
    oauthHelpers.validateAccessToken(region, accessToken);

  /* Static utility methods */
  static getAllRegions = () => utils.getAllRegions();

  static getAllRegionIds = () => utils.getAllRegionIds();

  static getAllRegionNames = () => utils.getAllRegionNames();

  static getRegionNameById = (regionId: RegionIdAsNumberOrString) =>
    utils.getRegionNameById(regionId);
}

/* tslint:disable:no-unnecessary-class no-this */
