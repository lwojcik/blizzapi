import { searchObjectBySelector } from '../../../../src/lib/helpers/json';

import sc2profileJson from '../../../__testData__/sc2profile.json';

/* tslint:disable no-expression-statement */
describe('searchObjectBySelector()', () => {
  test('should be defined', () => {
    expect(searchObjectBySelector).toBeDefined();
  });

  test('should be function', () => {
    expect(searchObjectBySelector).toBeTruthy();
    expect(typeof searchObjectBySelector).toBe('function');
  });

  test('should return the same object for empty selector', () => {
    expect(searchObjectBySelector(sc2profileJson, '')).toMatchSnapshot();
  });
  test('should return filtered object for valid selector', () => {
    expect(searchObjectBySelector(sc2profileJson, 'snapshot.seasonSnapshot')).toMatchSnapshot();
  });

  test(`should return 'undefined' for non-existent selector`, () => {
    expect(searchObjectBySelector(sc2profileJson, 'loremIpsum')).toBe(undefined);
  });
});
/* tslint:enable no-expression-statement */
