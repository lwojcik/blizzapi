import constants from '../constants';

describe('CONSTANTS object', () => {
  test('should be defined', () => {
    expect(constants).toBeDefined();
  });

  test('should contain REGIONS property', () => {
    expect(constants.REGIONS).toBeDefined();
  });

  test('should contain LOCALES property', () => {
    expect(constants.LOCALES).toBeDefined();
  });

  test('should contain DEFAULT_LOCALES property', () => {
    expect(constants.LOCALES).toBeDefined();
  });

  test('should contain SERVERS property', () => {
    expect(constants.SERVERS).toBeDefined();
  });

  test('should contain SC2_REALMS property', () => {
    expect(constants.SC2_REALMS).toBeDefined();
  });

  test('should contain OAUTH_AUTHORIZE_SERVERS property', () => {
    expect(constants.SC2_REALMS).toBeDefined();
  });

  test('should contain OAUTH_TOKEN_URIS property', () => {
    expect(constants.OAUTH_TOKEN_URIS).toBeDefined();
  });

  test('should contain OAUTH_CHECK_TOKEN_URIS property', () => {
    expect(constants.OAUTH_CHECK_TOKEN_URIS).toBeDefined();
  });
});
