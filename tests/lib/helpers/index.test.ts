import * as helpers from '../../../src/lib/helpers';

/* tslint:disable no-expression-statement */
describe('Helpers module', () => {
  test('should be defined', () => {
    expect(helpers).toBeDefined();
  });

  test('should expose all modules', () => {
    expect(helpers).toMatchSnapshot();
  });
});
/* tslint:enable no-expression-statement */
