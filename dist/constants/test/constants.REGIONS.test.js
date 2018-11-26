"use strict";
var CONSTANTS = require('../constants');
var REGIONS = CONSTANTS.REGIONS;
describe('REGIONS', function () {
    test('should be defined', function () {
        expect(REGIONS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(REGIONS).length).toEqual(4);
    });
    test('should contain property "1"', function () {
        expect(REGIONS[1]).toBeDefined();
    });
    test('property "1" should be equal to "us"', function () {
        expect(REGIONS[1]).toEqual('us');
    });
    test('should contain property "2"', function () {
        expect(REGIONS[2]).toBeDefined();
    });
    test('property "2" should be equal to "eu"', function () {
        expect(REGIONS[2]).toEqual('eu');
    });
    test('should contain property "3"', function () {
        expect(REGIONS[2]).toBeDefined();
    });
    test('property "3" should be of type "Array"', function () {
        expect(Array.isArray(REGIONS[3])).toBe(true);
    });
    test('index 0 of property "3" should be equal to "kr"', function () {
        expect(REGIONS[3][0]).toEqual('kr');
    });
    test('index 1 of property "3" should be equal to "tw"', function () {
        expect(REGIONS[3][1]).toEqual('tw');
    });
    test('should contain property "5"', function () {
        expect(REGIONS[5]).toBeDefined();
    });
    test('property "5" should be equal to "cn"', function () {
        expect(REGIONS[5]).toEqual('cn');
    });
});
//# sourceMappingURL=constants.REGIONS.test.js.map