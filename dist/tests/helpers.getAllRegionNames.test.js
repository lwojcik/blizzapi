"use strict";
var helpers = require('../helpers');
var constants = require('../../constants/constants');
var REGIONS = constants.REGIONS;
var getAllRegionNames = helpers.getAllRegionNames;
describe('getAllRegionNames()', function () {
    test('should be defined', function () {
        expect(getAllRegionNames).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getAllRegionNames).toBe('function');
    });
    test('should return an array', function () {
        expect(typeof getAllRegionNames()).toBeTruthy();
        expect(getAllRegionNames().constructor === Array).toBe(true);
    });
    test('number of returned elements should match length of constants.REGIONS values after flattening', function () {
        var flattenedRegionsLength = [].concat.apply([], Object.values(REGIONS)).length;
        expect(getAllRegionNames().length).toEqual(flattenedRegionsLength);
    });
    test('returned array elements should be integers', function () {
        var isString = function (element) { return typeof element === 'string'; };
        expect(getAllRegionNames().every(isString)).toBe(true);
    });
});
//# sourceMappingURL=helpers.getAllRegionNames.test.js.map