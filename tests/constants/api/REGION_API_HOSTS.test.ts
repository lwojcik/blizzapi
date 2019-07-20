import constants from '../../../src/lib/constants';

const { REGION_API_HOSTS } = constants;

describe('REGION_API_HOSTS', () => {
  test('should be defined', () => {
    expect(REGION_API_HOSTS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(REGION_API_HOSTS)).toBe(true);
  });

  test('should match snapshot', () => {
    expect(REGION_API_HOSTS).toMatchSnapshot();
  });
});
