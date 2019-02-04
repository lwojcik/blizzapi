import { Endpoint, Selector } from '../types';

export interface RegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}

export interface QueryBatchOptions {
  readonly async: boolean;
  readonly sleepInterval: number;
}

export interface EndpointWithSelector {
  readonly endpoint: Endpoint;
  readonly selector: Selector;
}
