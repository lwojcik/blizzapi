import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

const { validateSc2Realm } = utils;

describe('validateSc2Realm()', () => {
  test('should be defined', () => {
    expect(validateSc2Realm).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof validateSc2Realm).toBe('function');
  });

});
