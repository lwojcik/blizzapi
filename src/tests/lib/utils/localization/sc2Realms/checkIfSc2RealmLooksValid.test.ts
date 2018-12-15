import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

const { checkIfSc2RealmLooksValid } = utils;

describe('checkIfSc2RealmLooksValid()', () => {
  test('should be defined', () => {
    expect(checkIfSc2RealmLooksValid).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof checkIfSc2RealmLooksValid).toBe('function');
  });

});
