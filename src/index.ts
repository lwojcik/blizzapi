import BlizzAPI, { BlizzAPIOptions } from './classes/BlizzAPI';

export * from './types.d';

export { BlizzAPIOptions };
export default BlizzAPI;

/* istanbul ignore next */
// tslint:disable no-object-mutation
if (module) module.exports = BlizzAPI;
