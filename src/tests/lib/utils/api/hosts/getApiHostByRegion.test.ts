import * as utils from '../../../../../lib/utils';

const { getApiHostByRegion } = utils;

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

describe('getApiHostByRegion()', () => {
  test('should be defined', () => {
    expect(getApiHostByRegion).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getApiHostByRegion).toBe('function');
  });

  regionIds.forEach(regionId => {
    test('should return correct value for ${regionId} as valid region id', () => {
      expect(getApiHostByRegion(regionId)).toMatchSnapshot();
    });
  });

  wrongRegionIds.forEach(wrongRegionId => {
      test('should throw RangeError for ${wrongRegionId} as invalid region id', () => {
        expect(() => getApiHostByRegion(wrongRegionId)).toThrow(RangeError);
      });
    });

  regionNames.forEach(regionName => {
    test('should return correct value for ${regionName} as valid region name', () => {
      expect(getApiHostByRegion(regionName)).toMatchSnapshot();
    });
  });

  wrongRegionNames.forEach(wrongRegionName => {
    test('should throw RangeError for ${wrongRegionName} as invalid region name', () => {
      expect(() => getApiHostByRegion(wrongRegionName)).toThrow(RangeError);
    });
  });
});
