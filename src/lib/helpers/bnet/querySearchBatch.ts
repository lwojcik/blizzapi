import { RegionIdOrName, EndpointsWithSelectors, AccessToken } from '../../types';
import { endpointsWithSelectors as validateEndpointsWithSelectors } from '../validators';

export const querySearchBatch = (
  region: RegionIdOrName,
  endpointsWithSelectors: EndpointsWithSelectors,
  accessToken: AccessToken,
) => {
  // tslint:disable no-expression-statement
  console.log(region);
  console.log(accessToken);
  // tslint:enable no-expression-statement

  const validEndpointsWithSelectors = validateEndpointsWithSelectors(endpointsWithSelectors);

  /* tslint:disable no-if-statement */
  if (!validEndpointsWithSelectors) {
    throw new RangeError(`${endpointsWithSelectors} is not a valid endpoint-and-selector object.`);
  }
  /* tslint:enable no-if-statement */
};
