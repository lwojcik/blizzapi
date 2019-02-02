import * as utils from '../../../../../lib/utils';

const { getCheckTokenUriByRegion } = utils;

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

const wrongRegionNames = [
  'a1',
  'adasf',
  '1abc',
  '!@#$',
  '><1',
];

const regionIds = [
  1,
  2,
  3,
  5,
  '1',
  '2',
  '3',
  '5',
];

const wrongRegionIds = [
  '10',
  '9999',
  '23232',
  'a1',
  'adasf',
  '1abc',
  '!@#$',
  '><1',
  10,
  34,
  6393,
  9999,
];

describe('getTokenUriByRegion()', () => {
  test('should be defined', () => {
    expect(getCheckTokenUriByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getCheckTokenUriByRegion).toBe('function');
  });

  regionIds.forEach(regionId => {
    test('should return correct value for ${regionId} as valid region id', () => {
      expect(getCheckTokenUriByRegion(regionId)).toMatchSnapshot();
    });
  });

  wrongRegionIds.forEach(wrongRegionId => {
      test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
        expect(() => getCheckTokenUriByRegion(wrongRegionId)).toThrow(RangeError);
      });
    });

  regionNames.forEach(regionName => {
    test('should return correct value for ${regionName} as valid region name', () => {
      expect(getCheckTokenUriByRegion(regionName)).toMatchSnapshot();
    });
  });

  wrongRegionNames.forEach(wrongRegionName => {
    test('should throw RangeError for ${wrongRegionName} as invalid region name', () => {
      expect(() => getCheckTokenUriByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
