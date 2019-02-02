import { ConstantKey } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common/index';

const { getUriByRegion } = utils;

const regionNames = [
  'us',
  'eu',
  'kr',
  'tw',
  'cn',
  'us',
  'EU',
  'KR',
  'TW',
  'CN',
  'Us',
  'Eu',
  'Kr',
  'Tw',
  'Cn',
  'uS',
  'eU',
  'kR',
  'tW',
  'cN',
];

const wrongRegionNames = ['a1', 'adasf', '1abc', '!@#$', '><1'];

const regionIds = [1, 2, 3, 5, '1', '2', '3', '5'];

const wrongRegionIds = ['10', '9999', '23232', 'a1', 'adasf', '1abc', '!@#$', '><1', 10, 34, 6393, 9999];

const constantKeys: ConstantKey[] = [
  'REGION_API_HOSTS',
  'OAUTH_AUTHORIZE_URIS',
  'OAUTH_TOKEN_URIS',
  'OAUTH_CHECK_TOKEN_URIS',
];

describe('getUriByRegion()', () => {
  test('should be defined', () => {
    expect(getUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegion).toBe('function');
  });

  regionIds.forEach(regionId =>
    constantKeys.forEach(constantKey => {
      test('should return correct value for ${regionId} and ${constantKey} as valid parameters', () => {
        expect(getUriByRegion(regionId, constantKey)).toMatchSnapshot();
      });
    }),
  );

  wrongRegionIds.forEach(wrongRegionId =>
    constantKeys.forEach(constantKey => {
      test('should throw RangeError for ${wrongRegionId} as invalid parameter', () => {
        expect(() => getUriByRegion(wrongRegionId, constantKey)).toThrow(RangeError);
      });
    }),
  );

  regionNames.forEach(regionName =>
    constantKeys.forEach(constantKey => {
      test('should return correct value for ${regionName} and ${constantKey} as valid parameters', () => {
        expect(getUriByRegion(regionName, constantKey)).toMatchSnapshot();
      });
    }),
  );

  wrongRegionNames.forEach(wrongRegionName =>
    constantKeys.forEach(constantKey => {
      test('should return correct value for ${regionName} and ${constantKey} as valid parameters', () => {
        expect(() => getUriByRegion(wrongRegionName, constantKey)).toThrow(RangeError);
      });
    }),
  );
});
