import constants from '../../src/lib/constants';

describe('CONSTANTS class', () => {
  test('should be defined', () => {
    expect(constants).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(constants).toMatchSnapshot();
  });
});