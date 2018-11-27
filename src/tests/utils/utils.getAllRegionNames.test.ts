import utils from '../../lib/utils';
import constants from '../../lib/constants';

const { REGIONS } = constants;

const { getAllRegionNames } = utils;

describe('getAllRegionNames()', () => {
  test('should be defined', () => {
    expect(getAllRegionNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegionNames).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionNames).toBeTruthy();
    expect(getAllRegionNames().constructor === Array).toBe(true);
  });

  test('number of returned elements should match length of constants.REGIONS values after flattening', () => {
    const flattenedRegionsLength = <number>([] as string[]).concat(...Object.values(REGIONS)).length;
    expect(getAllRegionNames().length).toEqual(flattenedRegionsLength);
  });

  // test('returned array elements should be integers', () => {
  //   const isString = element => typeof element === 'string';
  //   expect(getAllRegionNames().every(isString)).toBe(true);
  // });
});
