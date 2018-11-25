import helpers from '../helpers';

describe('Helpers', () => {
  test('should be defined', () => {
    expect(helpers).toBeDefined();
  });

  test('should be of type "Object"', () => {
    expect(helpers).toBeTruthy();
    expect(typeof helpers).toBe('object');
  });
});
