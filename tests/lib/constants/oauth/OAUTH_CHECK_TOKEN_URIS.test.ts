import constants from '../../../../src/constants';

const { OAUTH_CHECK_TOKEN_URIS } = constants;

describe('OAUTH_CHECK_TOKEN_URIS', () => {
  test('should be defined', () => {
    expect(OAUTH_CHECK_TOKEN_URIS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(OAUTH_CHECK_TOKEN_URIS)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(OAUTH_CHECK_TOKEN_URIS).toMatchSnapshot();
  });
});
