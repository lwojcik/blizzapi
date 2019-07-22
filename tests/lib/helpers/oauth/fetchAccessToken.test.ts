import { fetchAccessToken } from '../../../../src/lib/helpers/oauth';

describe('fetchAccessToken()', () => {
  const oauthUri = 'http://sample.oauth.uri/';
  const clientId = 'sample client id';
  const clientSecret = 'sample client secret';

  test('should be defined', () => {
    expect(fetchAccessToken).toBeDefined();
  });

  test('should be function', () => {
    expect(fetchAccessToken).toBeTruthy();
    expect(typeof fetchAccessToken).toBe('function');
  });

  test('returns correct response for GET request to a valid uri', async () => {
    const response = await fetchAccessToken({ oauthUri, clientId, clientSecret });
    expect(response).toMatchSnapshot();
  });
});