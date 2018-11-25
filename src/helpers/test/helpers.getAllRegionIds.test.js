const helpers = require('../helpers');
const constants = require('../../constants/constants');

const { REGIONS } = constants;

const { getAllRegionIds } = helpers;

describe('getAllRegionIds()', () => {
  test('should be defined', () => {
    expect(getAllRegionIds).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegionIds).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionIds()).toBeTruthy();
    expect(getAllRegionIds().constructor === Array).toBe(true);
  });

  test('number of returned elements should match constants.REGIONS length', () => {
    expect(getAllRegionIds().length).toEqual(Object.keys(REGIONS).length);
  });

  test('returned array elements should be integers', () => {
    const isInteger = element => typeof element === 'number';
    expect(getAllRegionIds().every(isInteger)).toBe(true);
  });
});
