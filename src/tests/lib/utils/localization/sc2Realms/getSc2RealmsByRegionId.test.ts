import * as utils from '../../../../../lib/utils';
// import constants from '../../../../../lib/constants';

const { getSc2RealmsByRegionId } = utils;

describe('getSc2RealmsByRegionId()', () => {
  test('should be defined', () => {
    expect(getSc2RealmsByRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getSc2RealmsByRegionId).toBe('function');
  });

});
