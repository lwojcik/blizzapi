import BlizzAPI, { BlizzAPIOptions } from './lib/classes/BlizzAPI';

export * from '../@types';
export * from '../@interfaces';

export { BlizzAPIOptions };
export default BlizzAPI;

/* istanbul ignore next */
// tslint:disable no-object-mutation
if (module) module.exports = BlizzAPI;