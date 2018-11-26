import helpers from '../helpers';
import constants from '../../constants/constants';

const { REGIONS } = constants;

const { getAllRegionIds } = helpers;

describe('getAllRegionIds()', () => {
  test('should be defined', () => {
    expect(<Function>getAllRegionIds).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof <Function>getAllRegionIds).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionIds()).toBeTruthy();
    expect(<Object>getAllRegionIds().constructor === Array).toBe(true);
  });

  test('number of returned elements should match constants.REGIONS length', () => {
    expect(<Number>getAllRegionIds().length).toEqual(<Number>Object.keys(REGIONS).length);
  });

  test('returned array elements should be integers', () => {
    const isInteger = (element:any) => typeof element === 'number';
    expect(getAllRegionIds().every(isInteger)).toBe(true);
  });
});
