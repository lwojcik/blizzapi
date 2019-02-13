const globalAny: any = global;
// tslint:disable-next-line
globalAny.fetch = <any>require('jest-fetch-mock');
