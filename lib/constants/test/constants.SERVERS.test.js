"use strict";
var CONSTANTS = require('../constants');
var SERVERS = CONSTANTS.SERVERS;
describe('SERVERS', function () {
    test('should be defined', function () {
        expect(SERVERS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(SERVERS).length).toEqual(4);
    });
    test('should contain property "1"', function () {
        expect(SERVERS[1]).toBeDefined();
    });
    test('property "1" should be equal to "https://us.api.blizzard.com"', function () {
        expect(SERVERS[1]).toEqual('https://us.api.blizzard.com');
    });
    test('should contain property "2"', function () {
        expect(SERVERS[2]).toBeDefined();
    });
    test('property "2" should be equal to "https://eu.api.blizzard.com"', function () {
        expect(SERVERS[2]).toEqual('https://eu.api.blizzard.com');
    });
    test('should contain property "3"', function () {
        expect(SERVERS[3]).toBeDefined();
    });
    test('property "3" should be equal to "https://kr.api.blizzard.com"', function () {
        expect(SERVERS[3]).toEqual('https://kr.api.blizzard.com');
    });
    test('should contain property "5"', function () {
        expect(SERVERS[5]).toBeDefined();
    });
    test('property "5" should be equal to "https://api.blizzard.com.cn"', function () {
        expect(SERVERS[5]).toEqual('https://api.blizzard.com.cn');
    });
});
//# sourceMappingURL=constants.SERVERS.test.js.map