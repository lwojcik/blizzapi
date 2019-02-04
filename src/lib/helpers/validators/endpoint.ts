import { Endpoint } from '../../types';

// tslint:disable no-expression-statement
export default (endpoint: Endpoint) => {
  const endpointStartsWithSlash = endpoint[0] === '/';
  const endpointIsLongEnough = endpoint.length > 3;
  const endpointHasMoreThanOneSlash = endpoint.split('/').length - 1 > 1;

  return endpointStartsWithSlash
    ? endpointIsLongEnough
      ? endpointHasMoreThanOneSlash
        ? true
        : false
      : false
    : false;
};
// tslint:enable no-expression-statement
