import constants from '../../../src/lib/constants';

const { OAUTH_TOKEN_URIS } = constants;

describe('OAUTH_TOKEN_URIS', () => {
  test('should be defined', () => {
    expect(OAUTH_TOKEN_URIS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(OAUTH_TOKEN_URIS)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(OAUTH_TOKEN_URIS).toMatchSnapshot();
  });
});