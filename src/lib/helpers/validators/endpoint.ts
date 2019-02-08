import { ValidatorFunction, Endpoint } from '../../types';

const endpointStartsWithSlash = (endpoint: Endpoint) => endpoint[0] === '/';
const endpointIsLongEnough = (endpoint: Endpoint) => endpoint.length > 3;
const endpointHasMoreThanOneSlash = (endpoint: Endpoint) => endpoint.split('/').length - 1 > 1;

const validators = [
  endpointStartsWithSlash,
  endpointIsLongEnough,
  endpointHasMoreThanOneSlash,
] as ReadonlyArray<ValidatorFunction>;

export default (endpoint: Endpoint) => validators.every(validator => validator(endpoint));
