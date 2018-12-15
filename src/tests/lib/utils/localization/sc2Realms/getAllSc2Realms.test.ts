import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';

const { getAllSc2Realms } = utils;

describe('getAllSc2Realms()', () => {
  test('should be defined', () => {
    expect(getAllSc2Realms).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllSc2Realms).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllSc2Realms()).toBeTruthy();
    expect(typeof getAllSc2Realms()).toBe('object');
  });

  test('returned object should match constants.SC2_REALMS property', () => {
    expect(getAllSc2Realms()).toMatchObject(constants.SC2_REALMS);
  });
});
