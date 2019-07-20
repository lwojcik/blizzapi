import { default as fetchFromUri } from '../../../../src/lib/helpers/fetch/fetchFromUri';

/* tslint:disable no-expression-statement */
describe('fetchFromUri()', () => {
  test('should be defined', () => {
    expect(fetchFromUri).toBeDefined();
  });

  test('should be function', () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe('function');
  });

  // TODO: unignore fetchFromUri in coverage and write actual tests
});
/* tslint:enable no-expression-statement */
