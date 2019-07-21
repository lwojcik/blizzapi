import { getAccessToken } from '../../../../src/lib/helpers/oauth';

describe('getAccessToken()', () => {
  const region = 'us';
  const clientId = 'sample client id';
  const clientSecret = 'sample client secret';

  test('should be defined', () => {
    expect(getAccessToken).toBeDefined();
  });

  test('should be function', () => {
    expect(getAccessToken).toBeTruthy();
    expect(typeof getAccessToken).toBe('function');
  });

  test('returns correct response for GET request to a valid uri', async () => {
    const response = await getAccessToken(region, clientId, clientSecret);
    expect(response).toMatchSnapshot();
  });
});