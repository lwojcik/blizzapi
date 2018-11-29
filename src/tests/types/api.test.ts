import { HostUri } from '../../lib/types/api';

describe('Api types', () => {
  test('Variable of type HostUri should be string', () => {
    const testVariable = <HostUri>'test';
    expect(typeof testVariable).toBe('string');
  });
});
