import { default as delay } from '../../../../src/lib/helpers/common/delay';

/* tslint:disable no-expression-statement */
describe('delay()', () => {
  test('should be defined', () => {
    expect(delay).toBeDefined();
  });

  test('should be function', () => {
    expect(delay).toBeTruthy();
    expect(typeof delay).toBe('function');
  });

  test('should resolve a Promise', () => {
    expect(delay(100)).resolves;
  });
});
/* tslint:enable no-expression-statement */
