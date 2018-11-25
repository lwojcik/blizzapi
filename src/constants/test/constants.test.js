const CONSTANTS = require('../constants');

describe('CONSTANTS object', () => {
  test('should be defined', () => {
    expect(CONSTANTS).toBeDefined();
  });

  test('should contain REGIONS property', () => {
    expect(CONSTANTS.REGIONS).toBeDefined();
  });

  test('should contain LOCALES property', () => {
    expect(CONSTANTS.LOCALES).toBeDefined();
  });

  test('should contain DEFAULT_LOCALES property', () => {
    expect(CONSTANTS.LOCALES).toBeDefined();
  });

  test('should contain SERVERS property', () => {
    expect(CONSTANTS.SERVERS).toBeDefined();
  });

  test('should contain SC2_REALMS property', () => {
    expect(CONSTANTS.SC2_REALMS).toBeDefined();
  });

  test('should contain OAUTH_AUTHORIZE_SERVERS property', () => {
    expect(CONSTANTS.SC2_REALMS).toBeDefined();
  });

  test('should contain OAUTH_TOKEN_URIS property', () => {
    expect(CONSTANTS.OAUTH_TOKEN_URIS).toBeDefined();
  });

  test('should contain OAUTH_CHECK_TOKEN_URIS property', () => {
    expect(CONSTANTS.OAUTH_CHECK_TOKEN_URIS).toBeDefined();
  });
});
