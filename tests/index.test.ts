import BlizzAPI from '../src';

describe('Index', () => {
  it('should export BlizzAPI', () => {
    expect(BlizzAPI).toBeDefined();
  });

  it('BlizzAPI should be a class', () => {
    const blizzapi = new BlizzAPI({ region: '', clientId: '', clientSecret: '' });
    expect(blizzapi instanceof BlizzAPI).toBe(true);
  });
});
