import { EndpointsWithSelectors } from '../../types';
import { default as validateEndpoint } from './endpoint';
import { default as validateSelector } from './selector';

export default (endpointsWithSelectors: EndpointsWithSelectors) =>
  endpointsWithSelectors.every(
    endpointWithSelector =>
      validateEndpoint(endpointWithSelector.endpoint) &&
      validateSelector(endpointWithSelector.selector),
  );
