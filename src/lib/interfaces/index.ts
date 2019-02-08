import { Endpoint, Selector } from '../types';

export interface RegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}

export interface QueryBatchOptions {
  readonly interval: number;
}

export interface EndpointWithSelector {
  readonly endpoint: Endpoint;
  readonly selector: Selector;
}
