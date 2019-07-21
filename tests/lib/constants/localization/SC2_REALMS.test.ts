import constants from '../../../../src/lib/constants';

const { SC2_REALMS } = constants;

describe('SC2_REALMS', () => {
  test('should be defined', () => {
    expect(SC2_REALMS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(SC2_REALMS)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(SC2_REALMS).toMatchSnapshot();
  });
});
