import '../../typings.d.ts';
import BlizzAPI from '../src/index';

describe('Index', () => {
  test('should export BlizzAPI', () => {
    expect(BlizzAPI).toBeDefined();
  });

  test('BlizzAPI should be a class', () => {
    const blizzapi = new BlizzAPI({ region: '', clientId: '', clientSecret: ''});
    expect(blizzapi instanceof BlizzAPI).toBe(true);
  });
});