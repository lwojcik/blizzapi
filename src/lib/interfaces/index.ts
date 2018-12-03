// Still don't know how to avoid shipping this file in dist build
// https://github.com/Microsoft/TypeScript/issues/10908

declare module Interfaces {
  interface IRegionIdProperties<Value> {
    [regionId: string]: Value;
  }
}
