import { Endpoint, Selector, QueryEngine } from '../types';

export interface RegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}

export interface QueryOptions {
  readonly batchQueryInterval: number;
  readonly refreshAccessToken: boolean;
  readonly onAccessTokenInvalid: Function;
  readonly onAccessTokenRefresh: Function;
  readonly queryEngine: QueryEngine;
}

export interface EndpointWithSelector {
  readonly endpoint: Endpoint;
  readonly selector: Selector;
}
