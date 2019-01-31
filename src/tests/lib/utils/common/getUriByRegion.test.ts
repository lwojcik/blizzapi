import { ConstantKey } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common/index';
import constants from '../../../../lib/constants';
import { getRegionIdByName } from '../../../../lib/utils/localization/regions';

const { getUriByRegion } = utils;

const regionIds = [
  1,
  2,
  3,
  5,
  '1',
  '2',
  '3',
  '5',
]

const regionNames = [
  'eu',
  'us',
  'kr',
  'cn'
];

const constantKeys:ConstantKey[] = [
  'REGION_API_HOSTS',
  'OAUTH_AUTHORIZE_URIS',
  'OAUTH_CHECK_TOKEN_URIS',
  'OAUTH_TOKEN_URIS',
];

describe('getUriByRegion()', () => {
  test('should be defined', () => {
    expect(getUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegion).toBe('function');
  });

  regionIds.forEach((region) => {
    constantKeys.forEach(constantKey => {
      test(`should return correct uri for regionId ${region} and constant ${constantKey}`, () => {
        expect(getUriByRegion(region, constantKey)).toBe(constants[constantKey][region]);
      });
    });
  });

  regionNames.forEach((regionName) => {
    constantKeys.forEach(constantKey => {
      const regionId = getRegionIdByName(regionName);
      test(`should return correct uri for region name ${regionName} and constant ${constantKey}`, () => {
        expect(getUriByRegion(regionName, constantKey)).toBe(constants[constantKey][regionId]);
      });
    });
  });
});
