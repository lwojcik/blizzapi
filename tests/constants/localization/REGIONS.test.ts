import constants from '../../../src/lib/constants';

const { REGIONS } = constants;

describe('REGIONS', () => {
  test('should be defined', () => {
    expect(REGIONS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(REGIONS)).toBe(true);
  });
  test('should match snapshot', () => {
    expect(REGIONS).toMatchSnapshot();
  });
});