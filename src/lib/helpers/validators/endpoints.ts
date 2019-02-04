import { Endpoints } from '../../types';
import { default as validateEndpoint } from './endpoint';

export default (endpoints: Endpoints) => endpoints.every(endpoint => validateEndpoint(endpoint));
