import { RegionIdOrName, EndpointsWithSelectors, AccessToken } from '../../types';
import { endpointsWithSelectors as validateEndpointsWithSelectors } from '../validators';

export default (
  region: RegionIdOrName,
  endpointsWithSelectors: EndpointsWithSelectors,
  accessToken: AccessToken,
) => {
  // tslint:disable no-expression-statement
  console.log(region);
  console.log(accessToken);
  console.log(endpointsWithSelectors);
  // tslint:enable no-expression-statement

  const validEndpointsWithSelectors = validateEndpointsWithSelectors(endpointsWithSelectors);

  /* tslint:disable no-if-statement */
  if (!validEndpointsWithSelectors) {
    throw new RangeError(`${endpointsWithSelectors} is not a valid endpoint-and-selector object.`);
  }
  /* tslint:enable no-if-statement */
  // const fetchObjects = endpointsWithSelectors.map(async (endpointWithSelector, i) =>
  //   delay(i * 1000).then(() => queryEndpoint(region, endpoint, accessToken)),
  // );
  // return Promise.all(fetchObjects);
  // return endpointsWithSelectors.forEach(endpointWithSelector => {
  //   const endpoint = endpointWithSelector.endpoint;
  //   const selector = endpointWithSelector.selector;
  // });
};
