import * as utils from '../../../../../lib/utils';
import constants from '../../../../../lib/constants';

const { getAllAuthorizeUris } = utils;

describe('getAllAuthorizeUris()', () => {
  test('should be defined', () => {
    expect(getAllAuthorizeUris).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllAuthorizeUris).toBe('function');
  });

  test('should return an object', () => {
    expect(typeof getAllAuthorizeUris()).toBeTruthy();
    expect(typeof getAllAuthorizeUris()).toBe('object');
  });

  test('returned object should match constants.OAUTH_AUTHORIZE_URIS property', () => {
    expect(getAllAuthorizeUris()).toMatchObject(constants.OAUTH_AUTHORIZE_URIS);
  });
});
