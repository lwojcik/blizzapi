import * as utils from '../../../../../src/lib/utils';
import constants from '../../../../../src/lib/constants';

const { getAllApiHosts } = utils;

/* tslint:disable no-expression-statement */
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
/* tslint:enable no-expression-statement */
