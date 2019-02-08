import { endpointsWithSelectors as validateEndpointsWithSelectors } from '../../../../lib/helpers/validators';

import endpointsJson from '../../../__testData__/endpoints.json';
import invalidEndpointsJson from '../../../__testData__/invalidEndpoints.json';

const validEndpointsWithValidSelectors = (endpointsJson as ReadonlyArray<string>).map(
  (endpoint, i) => ({
    endpoint,
    selector: `testSelector-${i}`,
  }),
);

const validEndpointsWithInvalidSelectors = (endpointsJson as ReadonlyArray<string>).map(
  endpoint => ({
    endpoint,
    selector: '',
  }),
);

const invalidEndpointsWithValidSelectors = (invalidEndpointsJson as ReadonlyArray<string>).map(
  (invalidEndpoint, i) => ({
    endpoint: invalidEndpoint,
    selector: `testSelector-${i}`,
  }),
);

const invalidEndpointsWithInvalidSelectors = (invalidEndpointsJson as ReadonlyArray<string>).map(
  invalidEndpoint => ({
    endpoint: invalidEndpoint,
    selector: '',
  }),
);

/* tslint:disable no-expression-statement */
describe('validateEndpointsWithSelectors()', () => {
  test('should be defined', () => {
    expect(validateEndpointsWithSelectors).toBeDefined();
  });

  test('should be function', () => {
    expect(validateEndpointsWithSelectors).toBeTruthy();
    expect(typeof validateEndpointsWithSelectors).toBe('function');
  });

  test('should return true for an array of valid endpoints with valid selectors', () => {
    expect(validateEndpointsWithSelectors(validEndpointsWithValidSelectors)).toBe(true);
  });

  test('should return false for an array of valid endpoints with invalid selectors', () => {
    expect(validateEndpointsWithSelectors(validEndpointsWithInvalidSelectors)).toBe(false);
  });

  test('should return false for an array of invalid endpoints with valid selectors', () => {
    expect(validateEndpointsWithSelectors(invalidEndpointsWithValidSelectors)).toBe(false);
  });

  test('should return false for an array of invalid endpoints with invalid selectors', () => {
    expect(validateEndpointsWithSelectors(invalidEndpointsWithInvalidSelectors)).toBe(false);
  });
});
/* tslint:enable no-expression-statement */
