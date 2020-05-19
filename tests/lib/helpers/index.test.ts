import * as helpers from '../../../src/helpers';

describe('Helpers module', () => {
  test('should be defined', () => {
    expect(helpers).toBeDefined();
  });

  test('should expose all modules', () => {
    expect(helpers).toMatchSnapshot();
  });
});
