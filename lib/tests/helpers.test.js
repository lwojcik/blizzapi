"use strict";
var helpers = require('../helpers');
describe('Helpers', function () {
    test('should be defined', function () {
        expect(helpers).toBeDefined();
    });
    test('should be of type "Object"', function () {
        expect(helpers).toBeTruthy();
        expect(typeof helpers).toBe('object');
    });
});
//# sourceMappingURL=helpers.test.js.map