export interface RegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}

export interface QueryBatchOptions {
  async: boolean;
  sleepInterval: number;
}
