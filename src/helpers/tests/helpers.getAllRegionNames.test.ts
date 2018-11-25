import helpers from '../helpers';
import constants from '../../constants/constants';

const { REGIONS } = constants;

const { getAllRegionNames } = helpers;

describe('getAllRegionNames()', () => {
  test('should be defined', () => {
    expect(<Function>getAllRegionNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(<string>typeof getAllRegionNames).toBe('function');
  });

  test('should return an array', () => {
    expect(<string>typeof getAllRegionNames()).toBeTruthy();
    expect(<Object>getAllRegionNames().constructor === Array).toBe(true);
  });

  test('number of returned elements should match length of constants.REGIONS values after flattening', () => {
    const flattenedRegionsLength = <number>([] as string[]).concat(...Object.values(REGIONS)).length;
    expect(<Number>getAllRegionNames().length).toEqual(flattenedRegionsLength);
  });

  // test('returned array elements should be integers', () => {
  //   const isString = element => typeof element === 'string';
  //   expect(getAllRegionNames().every(isString)).toBe(true);
  // });
});
