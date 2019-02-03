export interface RegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}

export interface QueryBatchOptions {
  readonly async: boolean;
  readonly sleepInterval: number;
}
