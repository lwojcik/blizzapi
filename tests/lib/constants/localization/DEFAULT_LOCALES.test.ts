import constants from '../../../../src/lib/constants';

const { DEFAULT_LOCALES } = constants;

describe('DEFAULT_LOCALES', () => {
  test('should be defined', () => {
    expect(DEFAULT_LOCALES).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(DEFAULT_LOCALES)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(DEFAULT_LOCALES).toMatchSnapshot();
  });


});