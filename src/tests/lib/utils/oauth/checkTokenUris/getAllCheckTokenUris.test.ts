import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';

const { getAllCheckTokenUris } = utils;

/* tslint:disable no-expression-statement */
describe('getAllCheckTokenUris()', () => {
  test('should be defined', () => {
    expect(getAllCheckTokenUris).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllCheckTokenUris).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllCheckTokenUris()).toBeTruthy();
    expect(typeof getAllCheckTokenUris()).toBe('object');
  });

  test('returned object should match constants.OAUTH_CHECK_TOKEN_URIS property', () => {
    expect(getAllCheckTokenUris()).toMatchObject(constants.OAUTH_CHECK_TOKEN_URIS);
  });
});
/* tslint:enable no-expression-statement */
