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
import { QueryOptions } from '../interfaces';
import BattleNetAPI from './abstract/BattleNetAPI';
import * as bnetHelpers from '../helpers/bnet';

/* tslint:disable:no-class no-this no-expression-statement no-object-mutation readonly-keyword typedef */

export default class BlizzAPI extends BattleNetAPI {
  readonly options: QueryOptions;

  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
    options?: QueryOptions,
  ) {
    super(region, clientId, clientSecret, accessToken);
    this.options = (options as QueryOptions) || {
      batchQueryInterval: 1000, // interval between subsequent batch queries
      validateAccessToken: false, // whether access token should be validated
      onAccessTokenInvalid: null, // function to run when access token is invalid
      onAccessTokenRefresh: null, // function to run when access token is refreshed
    };
  }

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
}

/* tslint:disable:no-unnecessary-class no-this */
