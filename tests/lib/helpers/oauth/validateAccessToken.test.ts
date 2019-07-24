import { validateAccessToken } from '../../../../src/lib/helpers/oauth';
const fetch = require('../../../../src/lib/helpers/fetch');

// tslint:disable-next-line: no-object-mutation
fetch.fetchFromUri = jest.fn().mockImplementation((options: { uri: string }) => {
  if (options.uri.includes("invalid_access_token")) {
    return {
      error: 'invalid_token',
    }
  }
  if (options.uri.includes("access_token_with_api_error")) {
    throw new Error('invalid token');
  }
  return {
    data: 'valid token',
  }
});

describe('validateAccessToken()', () => {
  const region = 'us';
  const validAccessToken = 'valid_access_token';
  const invalidAccessToken = 'invalid_access_token';
  const accessTokenWithApiError = 'access_token_with_api_error';

  test('should be defined', () => {
    expect(validateAccessToken).toBeDefined();
  });

  test('should be function', () => {
    expect(validateAccessToken).toBeTruthy();
    expect(typeof validateAccessToken).toBe('function');
  });

  test('returns true for valid access token', async () => {
    const response = await validateAccessToken(region, validAccessToken);
    expect(response).toMatchSnapshot();
  });

  test('returns false for invalid access token', async () => {
    const response = await validateAccessToken(region, invalidAccessToken);
    expect(response).toMatchSnapshot();
  });

  test('returns false in case of API error', async () => {
    const response = await validateAccessToken(region, accessTokenWithApiError);
    expect(response).toMatchSnapshot();
  });
});
