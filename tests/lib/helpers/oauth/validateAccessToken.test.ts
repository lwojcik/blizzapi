import { validateAccessToken } from '../../../../src/lib/helpers/oauth';

// import regionNamesJson from '../../../__testData__/regionNames.json';
// import wrongRegionNamesJson from '../../../__testData__/wrongRegionNames.json';
// import regionIdsJson from '../../../__testData__/regionIds.json';
// import wrongRegionIdsJson from '../../../__testData__/wrongRegionIds.json';

const fetch = require('../../../../src/lib/helpers/fetch');

// tslint:disable-next-line: no-object-mutation
fetch.fetchFromUri = jest.fn().mockImplementation((options: { uri: string }) => {
  if (options.uri.includes("incorrectAccessToken")) {
    return {
      error: 'invalid_token',
    }
  }
  if (options.uri.includes("accessTokenWithApiError")) {
    throw new Error('invalid token');
  }
  return {
    data: 'valid token',
  }
});

describe('validateAccessToken()', () => {
  const region = 'us';
  const accessToken = 'correctAccessToken';
  const incorrectAccessToken = 'incorrectAccessToken';
  const accessTokenWithApiError = 'accessTokenWithApiError';

  test('should be defined', () => {
    expect(validateAccessToken).toBeDefined();
  });

  test('should be function', () => {
    expect(validateAccessToken).toBeTruthy();
    expect(typeof validateAccessToken).toBe('function');
  });

  test('returns true for correct token', async () => {
    const response = await validateAccessToken(region, accessToken);
    expect(response).toMatchSnapshot();
  });

  test('returns false for incorrect token', async () => {
    const response = await validateAccessToken(region, incorrectAccessToken);
    expect(response).toMatchSnapshot();
  });

  test('returns false in case of API error', async () => {
    const response = await validateAccessToken(region, accessTokenWithApiError);
    expect(response).toMatchSnapshot();
  });
});
