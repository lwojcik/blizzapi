import constants from '../../../../src/lib/constants';

const { LOCALES } = constants;

describe('LOCALES', () => {
  test('should be defined', () => {
    expect(LOCALES).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(LOCALES)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(LOCALES).toMatchSnapshot();
  });
});