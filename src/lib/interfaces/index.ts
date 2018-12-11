// Still don't know how to avoid shipping this file in dist build
// https://github.com/Microsoft/TypeScript/issues/10908

export interface IRegionIdProperties<Value> {
  readonly [regionId: string]: Value;
}
