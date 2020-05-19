import constants from '../../../../src/constants';

const { OAUTH_AUTHORIZE_URIS } = constants;
describe('OAUTH_AUTHORIZE_URIS', () => {
  test('should be defined', () => {
    expect(OAUTH_AUTHORIZE_URIS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(OAUTH_AUTHORIZE_URIS)).toBe(true);
  });
  test('should match snapshot', () => {
    expect(OAUTH_AUTHORIZE_URIS).toMatchSnapshot();
  });
});