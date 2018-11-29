"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../../lib/constants"));
var REGION_API_HOSTS = constants_1.default.REGION_API_HOSTS;
describe('REGION_API_HOSTS', function () {
    test('should be defined', function () {
        expect(REGION_API_HOSTS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(REGION_API_HOSTS).length).toStrictEqual(4);
    });
    test('should contain property "1"', function () {
        expect(REGION_API_HOSTS[1]).toBeDefined();
    });
    test('property "1" should be equal to "https://us.api.blizzard.com"', function () {
        expect(REGION_API_HOSTS[1]).toStrictEqual('https://us.api.blizzard.com');
    });
    test('should contain property "2"', function () {
        expect(REGION_API_HOSTS[2]).toBeDefined();
    });
    test('property "2" should be equal to "https://eu.api.blizzard.com"', function () {
        expect(REGION_API_HOSTS[2]).toStrictEqual('https://eu.api.blizzard.com');
    });
    test('should contain property "3"', function () {
        expect(REGION_API_HOSTS[3]).toBeDefined();
    });
    test('property "3" should be equal to "https://kr.api.blizzard.com"', function () {
        expect(REGION_API_HOSTS[3]).toStrictEqual('https://kr.api.blizzard.com');
    });
    test('should contain property "5"', function () {
        expect(REGION_API_HOSTS[5]).toBeDefined();
    });
    test('property "5" should be equal to "https://api.blizzard.com.cn"', function () {
        expect(REGION_API_HOSTS[5]).toStrictEqual('https://api.blizzard.com.cn');
    });
});
//# sourceMappingURL=constants.REGION_API_HOSTS.test.js.map