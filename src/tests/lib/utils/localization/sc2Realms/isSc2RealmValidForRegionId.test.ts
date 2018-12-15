import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

const { isSc2RealmValidForRegionId } = utils;

describe('isSc2RealmValidForRegionId()', () => {
  test('should be defined', () => {
    expect(isSc2RealmValidForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof isSc2RealmValidForRegionId).toBe('function');
  });

});
