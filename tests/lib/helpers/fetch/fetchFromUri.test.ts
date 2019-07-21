import fetchFromUri from '../../../../src/lib/helpers/fetch/fetchFromUri';

/* tslint:disable no-expression-statement */
describe('fetchFromUri()', () => {
  test('should be defined', () => {
    expect(fetchFromUri).toBeDefined();
  });

  test('should be function', () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe('function');
  });

  test('returns correct response for GET request to a valid uri', async () => {
    const response = await fetchFromUri('http://example.org/valid/endpoint');
    expect(response).toMatchSnapshot();
  });

  test('returns correct response for POST request to a valid uri', async () => {
    const response = await fetchFromUri('http://example.org/valid/endpoint', 'POST');
    expect(response).toMatchSnapshot();
  });

  test('returns correct response for GET request with headers to a valid uri ', async () => {
    const response = await fetchFromUri('http://example.org/valid/endpoint', 'GET', { data: 'sample headers' });
    expect(response).toMatchSnapshot();
  });

  // TODO: unignore fetchFromUri in coverage and write actual tests
});
/* tslint:enable no-expression-statement */
