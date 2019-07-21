import { validateAccessToken } from '../../../../src/lib/helpers/oauth';

// import regionNamesJson from '../../../__testData__/regionNames.json';
// import wrongRegionNamesJson from '../../../__testData__/wrongRegionNames.json';
// import regionIdsJson from '../../../__testData__/regionIds.json';
// import wrongRegionIdsJson from '../../../__testData__/wrongRegionIds.json';

const fetch = require('../../../../src/lib/helpers/fetch');

// tslint:disable-next-line: no-object-mutation
fetch.fetchFromUri = jest.fn().mockImplementation((uri: string) => {
  if (uri.includes("incorrectAccessToken")) {
    return {
      error: 'invalid_token',
    }
  }
  if (uri.includes("accessTokenWithApiError")) {
    throw new Error('invalid token');
  }
  return {
    data: 'valid token',
  }
});

/* tslint:disable no-expression-statement */
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


  // (regionIdsJson as ReadonlyArray<string | number>).forEach(regionId => {
  //   test(`should return correct value for ${regionId} as valid region id`, () => {
  //     expect(getApiHostByRegion(regionId)).toMatchSnapshot();
  //   });
  // });

  // (wrongRegionIdsJson as ReadonlyArray<string | number>).forEach(wrongRegionId => {
  //   test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
  //     expect(() => getApiHostByRegion(wrongRegionId)).toThrow(RangeError);
  //   });
  // });

  // (regionNamesJson as ReadonlyArray<string>).forEach(regionName => {
  //   test(`should return correct value for ${regionName} as valid region name`, () => {
  //     expect(getApiHostByRegion(regionName)).toMatchSnapshot();
  //   });
  // });

  // (wrongRegionNamesJson as ReadonlyArray<string>).forEach(wrongRegionName => {
  //   test('should throw RangeError for ${wrongRegionName} as invalid region name', () => {
  //     expect(() => getApiHostByRegion(wrongRegionName)).toThrow(RangeError);
  //   });
  // });

  // test('returns correct response for GET request to a valid uri', async () => {
  //   const response = await getAccessToken(region, clientId, clientSecret);
  //   expect(response).toMatchSnapshot();
  // });
});
/* tslint:enable no-expression-statement */
