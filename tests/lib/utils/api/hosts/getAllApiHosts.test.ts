import * as utils from '../../../../../src/utils';
import constants from '../../../../../src/constants';

const { getAllApiHosts } = utils;

describe('getApiHosts()', () => {
  test('should be defined', () => {
    expect(getAllApiHosts).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllApiHosts).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllApiHosts()).toBeTruthy();
    expect(typeof getAllApiHosts()).toBe('object');
  });

  test('returned object should match constants.REGION_API_HOSTS property', () => {
    expect(getAllApiHosts()).toMatchObject(constants.REGION_API_HOSTS);
  });
});
