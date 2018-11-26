"use strict";
var helpers = require('../helpers');
var constants = require('../../constants/constants');
var REGIONS = constants.REGIONS;
var getAllRegionIds = helpers.getAllRegionIds;
describe('getAllRegionIds()', function () {
    test('should be defined', function () {
        expect(getAllRegionIds).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getAllRegionIds).toBe('function');
    });
    test('should return an array', function () {
        expect(typeof getAllRegionIds()).toBeTruthy();
        expect(getAllRegionIds().constructor === Array).toBe(true);
    });
    test('number of returned elements should match constants.REGIONS length', function () {
        expect(getAllRegionIds().length).toEqual(Object.keys(REGIONS).length);
    });
    test('returned array elements should be integers', function () {
        var isInteger = function (element) { return typeof element === 'number'; };
        expect(getAllRegionIds().every(isInteger)).toBe(true);
    });
});
//# sourceMappingURL=helpers.getAllRegionIds.test.js.map