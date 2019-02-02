import { ConstantKey } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common';
import constants from '../../../../lib/constants';
import { getRegionIdByName } from '../../../../lib/utils/localization/regions';
const { getUriByRegionName } = utils;

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

const constantKeys: ConstantKey[] = [
  'REGION_API_HOSTS',
  'OAUTH_AUTHORIZE_URIS',
  'OAUTH_TOKEN_URIS',
  'OAUTH_CHECK_TOKEN_URIS',
];

describe('getUriByRegionName()', () => {
  test('should be defined', () => {
    expect(getUriByRegionName).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegionName).toBe('function');
  });

  regionNames.forEach(regionName =>
    constantKeys.forEach(constantKey => {
      test('should return correct value for ${regionName} and ${constantKey} as valid parameters', () => {
        const regionId = getRegionIdByName(regionName);
        expect(getUriByRegionName(regionName, constantKey)).toBe(constants[constantKey][regionId]);
      });
    }),
  );

  wrongRegionNames.forEach(wrongRegionName =>
    constantKeys.forEach(constantKey => {
      test('should return correct value for ${regionName} and ${constantKey} as valid parameters', () => {
        expect(() => getUriByRegionName(wrongRegionName, constantKey)).toThrow(RangeError);
      });
    }),
  );
});
