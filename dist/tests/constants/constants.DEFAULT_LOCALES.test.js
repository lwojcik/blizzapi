"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../../lib/constants"));
var DEFAULT_LOCALES = constants_1.default.DEFAULT_LOCALES;
describe('DEFAULT_LOCALES', function () {
    test('should be defined', function () {
        expect(DEFAULT_LOCALES).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(DEFAULT_LOCALES).length).toStrictEqual(4);
    });
    test('should contain property "1"', function () {
        expect(DEFAULT_LOCALES[1]).toBeDefined();
    });
    test('property "1" should be equal to 0', function () {
        expect(DEFAULT_LOCALES[1]).toStrictEqual(0);
    });
    test('should contain property "2"', function () {
        expect(DEFAULT_LOCALES[2]).toBeDefined();
    });
    test('property "2" should be equal to 0', function () {
        expect(DEFAULT_LOCALES[2]).toStrictEqual(0);
    });
    test('should contain property "3"', function () {
        expect(DEFAULT_LOCALES[3]).toBeDefined();
    });
    test('property "3" should be equal to 0', function () {
        expect(DEFAULT_LOCALES[3]).toStrictEqual(0);
    });
    test('should contain property "5"', function () {
        expect(DEFAULT_LOCALES[5]).toBeDefined();
    });
    test('property "5" should be equal to 0', function () {
        expect(DEFAULT_LOCALES[5]).toStrictEqual(0);
    });
});
//# sourceMappingURL=constants.DEFAULT_LOCALES.test.js.map