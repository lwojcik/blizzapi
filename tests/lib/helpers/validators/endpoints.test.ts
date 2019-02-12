import { endpoints as validateEndpoints } from '../../../../src/lib/helpers/validators';

import endpointsJson from '../../../__testData__/endpoints.json';
import invalidEndpointsJson from '../../../__testData__/invalidEndpoints.json';
import mixedEndpointsJson from '../../../__testData__/mixedEndpoints.json';

/* tslint:disable no-expression-statement */
describe('validateEndpoints()', () => {
  test('should be defined', () => {
    expect(validateEndpoints).toBeDefined();
  });

  test('should be function', () => {
    expect(validateEndpoints).toBeTruthy();
    expect(typeof validateEndpoints).toBe('function');
  });

  test('should be function', () => {
    expect(validateEndpoints).toBeTruthy();
    expect(typeof validateEndpoints).toBe('function');
  });

  test(`should return true for an array of valid endpoints`, () => {
    expect(validateEndpoints(endpointsJson)).toBe(true);
  });

  test(`should return false for an array of invalid endpoints`, () => {
    expect(validateEndpoints(invalidEndpointsJson)).toBe(false);
  });

  test(`should return false for an array containing both valid and invalid endpoints`, () => {
    expect(validateEndpoints(mixedEndpointsJson)).toBe(false);
  });
});
/* tslint:enable no-expression-statement */
