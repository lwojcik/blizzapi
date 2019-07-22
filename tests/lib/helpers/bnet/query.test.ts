import query from '../../../../src/lib/helpers/bnet/query';

describe('query()', () => {
  test('should be defined', () => {
    expect(query).toBeDefined();
  });

  test('should be function', () => {
    expect(query).toBeTruthy();
    expect(typeof query).toBe('function');
  });

  test('returns correct response for GET request to a valid uri', async () => {
    const response = await query({
      region: 'us',
      endpoint: '/sc2/sample/endpoint',
      accessToken: 'sample access token'
    });
    expect(response).toMatchSnapshot();
  });

  test('throws RangeError for invalid endpoint', async () => {
    expect(() => query({
      region: 'us',
      endpoint: 'invalidEndpoint',
      accessToken: 'sample access token'
    })).toThrow(RangeError);
  });
});
