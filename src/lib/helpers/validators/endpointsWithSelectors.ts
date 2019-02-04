import { EndpointsWithSelectors } from '../../types';
import { default as validateEndpoint } from './endpoint';
import { default as validateSelector } from './selector';

export default (endpointsWithSelectors: EndpointsWithSelectors) => {
  return endpointsWithSelectors.every(endpointWithSelector => {
    return validateEndpoint(endpointWithSelector.endpoint) && validateSelector(endpointWithSelector.endpoint);
  });
};
