import * as utils from '../../../../../src/lib/utils';
import constants from '../../../../../src/lib/constants';

const { getAllAuthorizeUris } = utils;

/* tslint:disable no-expression-statement */
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
/* tslint:enable no-expression-statement */
