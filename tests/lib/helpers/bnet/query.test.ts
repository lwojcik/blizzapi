import query from '../../../../src/lib/helpers/bnet/query';
const oauth = require('../../../../src/lib/helpers/oauth');

// tslint:disable-next-line: no-object-mutation
oauth.validateAccessToken = jest.fn().mockImplementation(({}, accessToken: string) => {
  if (accessToken === 'invalid_access_token') return Promise.resolve(false);
  return Promise.resolve(true);
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
    })

    expect(response).toMatchSnapshot();
  });

  test(`returns error if validateAccessTokenOnEachQuery is set to true and access token is invalid`, async () => {
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
    console.log(response);
    expect(response).toMatchSnapshot();
  });

  test(`returns error if validateAccessTokenOnEachQuery is set to false and access token is invalid`, async () => {
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
    console.log(response);
    expect(response).toMatchSnapshot();
  });

  test(`calls onAccessTokenExpired() if provided and access token is invalid`, async () => {
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
        onAccessTokenRefresh:  undefined,
      },
    });
    expect(response).toMatchSnapshot();
    expect(onAccessTokenExpired).toHaveBeenCalledTimes(1);
  });
});
