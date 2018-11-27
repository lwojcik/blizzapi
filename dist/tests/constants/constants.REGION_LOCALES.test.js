"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../../lib/constants"));
var LOCALES = constants_1.default.LOCALES;
describe('LOCALES', function () {
    test('should be defined', function () {
        expect(LOCALES).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(LOCALES).length).toEqual(4);
    });
    test('should contain property "1"', function () {
        expect(LOCALES[1]).toBeDefined();
    });
    test('property "1" should be of type "Array"', function () {
        expect(Array.isArray(LOCALES[1])).toBe(true);
    });
    test('property "1" should contain 3 elements', function () {
        expect(Object.keys(LOCALES[1]).length).toEqual(3);
    });
    test('index 0 of property "1" should be equal to "en_US"', function () {
        expect(LOCALES[1][0]).toEqual('en_US');
    });
    test('index 1 of property "1" should be equal to "es_MX"', function () {
        expect(LOCALES[1][1]).toEqual('es_MX');
    });
    test('index 2 of property "1" should be equal to "pt_BR"', function () {
        expect(LOCALES[1][2]).toEqual('pt_BR');
    });
    test('should contain property "2"', function () {
        expect(LOCALES[2]).toBeDefined();
    });
    test('property "2" should be of type "Array"', function () {
        expect(Array.isArray(LOCALES[2])).toBe(true);
    });
    test('property "2" should contain 7 elements', function () {
        expect(Object.keys(LOCALES[2]).length).toEqual(7);
    });
    test('index 0 of property "2" should be equal to "en_GB"', function () {
        expect(LOCALES[2][0]).toEqual('en_GB');
    });
    test('index 1 of property "2" should be equal to "es_ES"', function () {
        expect(LOCALES[2][1]).toEqual('es_ES');
    });
    test('index 2 of property "2" should be equal to "fr_FR"', function () {
        expect(LOCALES[2][2]).toEqual('fr_FR');
    });
    test('index 3 of property "2" should be equal to "ru_RU"', function () {
        expect(LOCALES[2][3]).toEqual('ru_RU');
    });
    test('index 4 of property "2" should be equal to "de_DE"', function () {
        expect(LOCALES[2][4]).toEqual('de_DE');
    });
    test('index 5 of property "2" should be equal to "pt_PT"', function () {
        expect(LOCALES[2][5]).toEqual('pt_PT');
    });
    test('index 6 of property "2" should be equal to "it_IT"', function () {
        expect(LOCALES[2][6]).toEqual('it_IT');
    });
    test('should contain property "3"', function () {
        expect(LOCALES[3]).toBeDefined();
    });
    test('property "3" should be of type "Array"', function () {
        expect(Array.isArray(LOCALES[3])).toBe(true);
    });
    test('property "3" should contain 2 elements', function () {
        expect(Object.keys(LOCALES[3]).length).toEqual(2);
    });
    test('index 0 of property "3" should be equal to "ko_KR"', function () {
        expect(LOCALES[3][0]).toEqual('ko_KR');
    });
    test('index 0 of property "3" should be equal to "zh_TW"', function () {
        expect(LOCALES[3][1]).toEqual('zh_TW');
    });
    test('should contain property "5"', function () {
        expect(LOCALES[5]).toBeDefined();
    });
    test('property "5" should be of type "Array"', function () {
        expect(Array.isArray(LOCALES[5])).toBe(true);
    });
    test('property "5" should contain 1 element', function () {
        expect(Object.keys(LOCALES[5]).length).toEqual(1);
    });
    test('index 0 of property "5" should be equal to "zh_TW"', function () {
        expect(LOCALES[5][0]).toEqual('zh_CN');
    });
});
//# sourceMappingURL=constants.REGION_LOCALES.test.js.map