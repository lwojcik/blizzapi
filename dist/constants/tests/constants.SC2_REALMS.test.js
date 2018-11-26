"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../constants"));
var SC2_REALMS = constants_1.default.SC2_REALMS;
describe('SC2_REALMS', function () {
    test('should be defined', function () {
        expect(SC2_REALMS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(SC2_REALMS).length).toEqual(4);
    });
    test('should contain property "1"', function () {
        expect(SC2_REALMS[1]).toBeDefined();
    });
    test('property "1" should be of type "Array"', function () {
        expect(Array.isArray(SC2_REALMS[1])).toBe(true);
    });
    test('property "1" should contain 2 elements', function () {
        expect(Object.keys(SC2_REALMS[1]).length).toEqual(2);
    });
    test('index 0 of property "1" should be equal to 1', function () {
        expect(SC2_REALMS[1][0]).toEqual(1);
    });
    test('index 1 of property "1" should be equal to 2', function () {
        expect(SC2_REALMS[1][1]).toEqual(2);
    });
    test('should contain property "2"', function () {
        expect(SC2_REALMS[2]).toBeDefined();
    });
    test('property "1" should be of type "Array"', function () {
        expect(Array.isArray(SC2_REALMS[1])).toBe(true);
    });
    test('property "1" should contain 2 elements', function () {
        expect(Object.keys(SC2_REALMS[1]).length).toEqual(2);
    });
    test('index 0 of property "2" should be equal to 1', function () {
        expect(SC2_REALMS[1][0]).toEqual(1);
    });
    test('index 1 of property "2" should be equal to 2', function () {
        expect(SC2_REALMS[1][1]).toEqual(2);
    });
    test('should contain property "3"', function () {
        expect(SC2_REALMS[3]).toBeDefined();
    });
    test('property "3" should be of type "Array"', function () {
        expect(Array.isArray(SC2_REALMS[3])).toBe(true);
    });
    test('property "3" should contain 2 elements', function () {
        expect(Object.keys(SC2_REALMS[3]).length).toEqual(2);
    });
    test('index 0 of property "3" should be equal to 1', function () {
        expect(SC2_REALMS[3][0]).toEqual(1);
    });
    test('index 1 of property "3" should be equal to 2', function () {
        expect(SC2_REALMS[3][1]).toEqual(2);
    });
    test('should contain property "5"', function () {
        expect(SC2_REALMS[5]).toBeDefined();
    });
    test('property "5" should be of type "Array"', function () {
        expect(Array.isArray(SC2_REALMS[5])).toBe(true);
    });
    test('property "5" should contain 1 element', function () {
        expect(Object.keys(SC2_REALMS[5]).length).toEqual(1);
    });
    test('index 0 of property "5" should be equal to 1', function () {
        expect(SC2_REALMS[5][0]).toEqual(1);
    });
});
//# sourceMappingURL=constants.SC2_REALMS.test.js.map