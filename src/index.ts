import BlizzAPI from './lib/classes/BlizzAPI';

export * from '../@types';
export * from '../@interfaces';
export default BlizzAPI;

/* istanbul ignore next */
// tslint:disable no-object-mutation
if (module) module.exports = BlizzAPI;