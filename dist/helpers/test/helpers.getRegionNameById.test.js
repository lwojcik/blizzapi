"use strict";
var helpers = require('../helpers');
var getRegionNameById = helpers.getRegionNameById;
describe('getRegionNameById()', function () {
    test('should be defined', function () {
        expect(getRegionNameById).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getRegionNameById).toBe('function');
    });
});
//# sourceMappingURL=helpers.getRegionNameById.test.js.map