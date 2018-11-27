import utils from '../../lib/utils';

describe('Utils', () => {
  test('should be defined', () => {
    expect(utils).toBeDefined();
  });

  test('should be of type "Object"', () => {
    expect(utils).toBeTruthy();
    expect(typeof utils).toBe('object');
  });
});
