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
      clientId: 'valid_client_id',
      clientSecret: 'valid_client_secret',
      accessToken: 'valid_access_token',
      options: {
        validateAccessTokenOnEachQuery: false,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh:  undefined,
      }
    });
    expect(response).toMatchSnapshot();
  });

  test('rejects and throws RangeError for invalid endpoint', async () => {
    expect(query({
        region: 'us',
        endpoint: 'invalidEndpoint',
        clientId: 'valid_client_id',
        clientSecret: 'valid_client_secret',
        accessToken: 'valid_access_token',
        options: {
          validateAccessTokenOnEachQuery: false,
          refreshExpiredAccessToken: false,
          onAccessTokenExpired: undefined,
          onAccessTokenRefresh:  undefined,
        },
      })).rejects.toThrow(RangeError);
  });
});
