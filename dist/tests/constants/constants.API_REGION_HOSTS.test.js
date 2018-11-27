"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../../lib/constants"));
var HOSTS = constants_1.default.HOSTS;
describe('HOSTS', function () {
    test('should be defined', function () {
        expect(HOSTS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(HOSTS).length).toEqual(4);
    });
    test('should contain property "1"', function () {
        expect(HOSTS[1]).toBeDefined();
    });
    test('property "1" should be equal to "https://us.api.blizzard.com"', function () {
        expect(HOSTS[1]).toEqual('https://us.api.blizzard.com');
    });
    test('should contain property "2"', function () {
        expect(HOSTS[2]).toBeDefined();
    });
    test('property "2" should be equal to "https://eu.api.blizzard.com"', function () {
        expect(HOSTS[2]).toEqual('https://eu.api.blizzard.com');
    });
    test('should contain property "3"', function () {
        expect(HOSTS[3]).toBeDefined();
    });
    test('property "3" should be equal to "https://kr.api.blizzard.com"', function () {
        expect(HOSTS[3]).toEqual('https://kr.api.blizzard.com');
    });
    test('should contain property "5"', function () {
        expect(HOSTS[5]).toBeDefined();
    });
    test('property "5" should be equal to "https://api.blizzard.com.cn"', function () {
        expect(HOSTS[5]).toEqual('https://api.blizzard.com.cn');
    });
});
//# sourceMappingURL=constants.API_REGION_HOSTS.test.js.map