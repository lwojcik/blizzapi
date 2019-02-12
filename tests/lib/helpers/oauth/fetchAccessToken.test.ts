import { fetchFromUri } from '../../../../src/lib/helpers/fetch';

/* tslint:disable no-expression-statement */
describe('fetchFromUri()', () => {
  test('should be defined', () => {
    expect(fetchFromUri).toBeDefined();
  });

  test('should be function', () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe('function');
  });
});
/* tslint:enable no-expression-statement */
