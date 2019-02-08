import { selector as validateSelector } from '../../../../lib/helpers/validators';

/* tslint:disable no-expression-statement */
describe('validateSelector()', () => {
  test('should be defined', () => {
    expect(validateSelector).toBeDefined();
  });

  test('should be function', () => {
    expect(validateSelector).toBeTruthy();
    expect(typeof validateSelector).toBe('function');
  });

  test('should be function', () => {
    expect(validateSelector).toBeTruthy();
    expect(typeof validateSelector).toBe('function');
  });

  test('returns true for non-empty selector as parameter', () => {
    expect(validateSelector('test')).toBe(true);
  });

  test('returns false for empty selector as parameter', () => {
    expect(validateSelector('')).toBe(false);
  });
});
/* tslint:enable no-expression-statement */
