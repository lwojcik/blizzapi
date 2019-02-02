import { ConstantKey } from '../../../../lib/types';
import * as utils from '../../../../lib/utils/common';

const regionIds = [1, 2, 3, 5, '1', '2', '3', '5'];

const wrongRegionIds = ['10', '9999', '23232', 'a1', 'adasf', '1abc', '!@#$', '><1', 10, 34, 6393, 9999];

const constantKeys: ConstantKey[] = [
  'REGION_API_HOSTS',
  'OAUTH_AUTHORIZE_URIS',
  'OAUTH_TOKEN_URIS',
  'OAUTH_CHECK_TOKEN_URIS',
];

const { getUriByRegionId } = utils;

describe('getUriByRegionId()', () => {
  test('should be defined', () => {
    expect(getUriByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getUriByRegionId).toBe('function');
  });

  regionIds.forEach(regionId => {
    constantKeys.forEach(constantKey => {
      test('should return correct value for ${regionId} and ${constantKey} as valid parameters', () => {
        expect(getUriByRegionId(regionId, constantKey)).toMatchSnapshot();
      });
    });
  });

  wrongRegionIds.forEach(wrongRegionId => {
    constantKeys.forEach(constantKey => {
      test('should throw RangeError for ${wrongRegionId} as invalid parameter', () => {
        expect(() => getUriByRegionId(wrongRegionId, constantKey)).toThrow(RangeError);
      });
    });
  });
});
