"use strict";
var helpers = require('../helpers');
var constants = require('../../constants/constants');
var getAllRegions = helpers.getAllRegions;
describe('getAllRegions()', function () {
    test('should be defined', function () {
        expect(getAllRegions).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getAllRegions).toBe('function');
    });
    test('should return an object', function () {
        expect(typeof getAllRegions()).toBeTruthy();
        expect(typeof getAllRegions()).toBe('object');
    });
    test('returned object should match constants.REGIONS property', function () {
        expect(getAllRegions()).toMatchObject(constants.REGIONS);
    });
});
//# sourceMappingURL=helpers.getAllRegions.test.js.map