import { Endpoint, Selector } from '../types';

export interface RegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}

export interface QueryOptions {
  readonly batchQueryInterval: number;
  readonly validateAccessTokenOnEachQuery: boolean;
  readonly revalidateAccessTokenIfExpired: boolean;
  readonly onAccessTokenRefresh: Function | null;
}

export interface EndpointWithSelector {
  readonly endpoint: Endpoint;
  readonly selector: Selector;
}
