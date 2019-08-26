import fetchFromUri from '../../../../src/lib/helpers/fetch/fetchFromUri';

describe('fetchFromUri()', () => {
  test('should be defined', () => {
    expect(fetchFromUri).toBeDefined();
  });

  test('should be function', () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe('function');
  });

  test('returns correct response for GET request to a valid uri', async () => {
    const response = await fetchFromUri({ uri: 'http://example.org/valid/endpoint' });
    expect(response).toMatchSnapshot();
  });

  test('returns correct response for POST request to a valid uri', async () => {
    const response = await fetchFromUri({
      uri: 'http://example.org/valid/endpoint',
      method: 'POST',
    });
    expect(response).toMatchSnapshot();
  });

  test('returns correct response for GET request with headers to a valid uri ', async () => {
    const response = await fetchFromUri({
      uri: 'http://example.org/valid/endpoint',
      method: 'GET',
      headers: {
        data: 'sample headers'
      }
    });
    expect(response).toMatchSnapshot();
  });

  test('returns correct response for GET request to uri containing regional characters', async () => {
    const response = await fetchFromUri({
      uri: 'http://ęxąmple.org/zażółćgęśląjaźń/гордунни/좋은경기',
      method: 'GET',
    });
    expect(response).toMatchSnapshot();
  });
});
