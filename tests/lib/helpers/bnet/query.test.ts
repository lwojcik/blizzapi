import query from '../../../../src/helpers/bnet/query';
jest.mock('../../../../src/helpers/oauth');
const oauth = require('../../../../src/helpers/oauth');

// tslint:disable-next-line: no-object-mutation
oauth.validateAccessToken = jest.fn().mockImplementation(({}, accessToken: string) => {
  if (accessToken === 'invalid_access_token') return Promise.resolve(false);
  return Promise.resolve(true);
});

// tslint:disable-next-line: no-object-mutation
oauth.getAccessToken = jest.fn().mockImplementation(() => {
  return Promise.resolve('new_refreshed_access_token');
});

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
      },
    });
    expect(response).toMatchSnapshot();
  });

  test('returns correct response for GET request with params to a valid uri', async () => {
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
        params: {
          data: 'test params',
        },
      },
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

  test('validates access token if validateAccessTokenOnEachQuery is set to true', async () => {
    const response = await query({
      region: 'us',
      endpoint: '/valid/endpoint',
      clientId: 'valid_client_id',
      clientSecret: 'valid_client_secret',
      accessToken: 'valid_access_token',
      options: {
        validateAccessTokenOnEachQuery: true,
        refreshExpiredAccessToken: false,
        onAccessTokenExpired: undefined,
        onAccessTokenRefresh:  undefined,
      },
    });

    expect(response).toMatchSnapshot();
  });

  test(
    'returns error if validateAccessTokenOnEachQuery is set to true and access token is invalid',
    async () => {
      const response = await query({
        region: 'us',
        endpoint: '/valid/endpoint',
        clientId: 'valid_client_id',
        clientSecret: 'valid_client_secret',
        accessToken: 'invalid_access_token',
        options: {
          validateAccessTokenOnEachQuery: true,
          refreshExpiredAccessToken: false,
          onAccessTokenExpired: undefined,
          onAccessTokenRefresh:  undefined,
        },
      });
      expect(response).toMatchSnapshot();
    });

  test(
    'returns error if validateAccessTokenOnEachQuery is set to false and access token is invalid',
    async () => {
      const response = await query({
        region: 'us',
        endpoint: '/valid/endpoint',
        clientId: 'valid_client_id',
        clientSecret: 'valid_client_secret',
        accessToken: 'invalid_access_token',
        options: {
          validateAccessTokenOnEachQuery: false,
          refreshExpiredAccessToken: false,
          onAccessTokenExpired: undefined,
          onAccessTokenRefresh:  undefined,
        },
      });
      expect(response).toMatchSnapshot();
    });

  test(
    'calls onAccessTokenExpired() if provided and access token is invalid',
    async () => {
      const onAccessTokenExpired = jest.fn();
      const response = await query({
        region: 'us',
        endpoint: '/valid/endpoint',
        clientId: 'valid_client_id',
        clientSecret: 'valid_client_secret',
        accessToken: 'invalid_access_token',
        options: {
          onAccessTokenExpired,
          validateAccessTokenOnEachQuery: false,
          refreshExpiredAccessToken: false,
          onAccessTokenRefresh: undefined,
        },
      });
      expect(response).toMatchSnapshot();
      expect(onAccessTokenExpired).toHaveBeenCalled();
    });

  test(
    'refreshes access token if refreshExpiredAccessToken is set to true',
    async () => {
      const response = await query({
        region: 'us',
        endpoint: '/valid/endpoint',
        clientId: 'valid_client_id',
        clientSecret: 'valid_client_secret',
        accessToken: 'invalid_access_token',
        options: {
          validateAccessTokenOnEachQuery: false,
          refreshExpiredAccessToken: true,
          onAccessTokenExpired: undefined,
          onAccessTokenRefresh: undefined,
        },
      });
      expect(response).toMatchSnapshot();
    });

  test(
    'calls onAccessTokenRefresh() if provided and refreshExpiredAccessToken is set to true',
    async () => {
      const onAccessTokenRefresh = jest.fn();

      const response = await query({
        region: 'us',
        endpoint: '/valid/endpoint',
        clientId: 'valid_client_id',
        clientSecret: 'valid_client_secret',
        accessToken: 'invalid_access_token',
        options: {
          onAccessTokenRefresh,
          validateAccessTokenOnEachQuery: false,
          refreshExpiredAccessToken: true,
          onAccessTokenExpired: undefined,
        },
      });
      expect(response).toMatchSnapshot();
      expect(onAccessTokenRefresh).toHaveBeenCalled();
    });
});
