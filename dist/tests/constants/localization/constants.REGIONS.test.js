"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../../../lib/constants"));
var REGIONS = constants_1.default.REGIONS;
describe('REGIONS', function () {
    test('should be defined', function () {
        expect(REGIONS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(REGIONS).length).toStrictEqual(4);
    });
    test('should contain property "1"', function () {
        expect(REGIONS[1]).toBeDefined();
    });
    test('should contain property "2"', function () {
        expect(REGIONS[2]).toBeDefined();
    });
    test('should contain property "3"', function () {
        expect(REGIONS[3]).toBeDefined();
    });
    test('should contain property "5"', function () {
        expect(REGIONS[5]).toBeDefined();
    });
    describe('Property 1', function () {
        test('value should be an array', function () {
            expect(typeof REGIONS[1]).toBeTruthy();
            expect(REGIONS[1].constructor === Array).toBe(true);
        });
        test('value array should contain 1 element', function () {
            expect(REGIONS[1].length).toStrictEqual(1);
        });
        test('index 0 of value array should be equal to "us"', function () {
            expect(REGIONS[1][0]).toStrictEqual('us');
        });
    });
    describe('Property 2', function () {
        test('value should be an array', function () {
            expect(typeof REGIONS[2]).toBeTruthy();
            expect(REGIONS[2].constructor === Array).toBe(true);
        });
        test('value array should contain 1 element', function () {
            expect(REGIONS[2].length).toStrictEqual(1);
        });
        test('index 0 of value array should be equal to "eu"', function () {
            expect(REGIONS[2][0]).toStrictEqual('eu');
        });
    });
    describe('Property 3', function () {
        test('value should be an array', function () {
            expect(typeof REGIONS[3]).toBeTruthy();
            expect(REGIONS[3].constructor === Array).toBe(true);
        });
        test('value array should contain 2 elements', function () {
            expect(REGIONS[3].length).toStrictEqual(2);
        });
        test('index 0 of value array should be equal to "kr"', function () {
            expect(REGIONS[3][0]).toStrictEqual('kr');
        });
        test('index 1 of value array should be equal to "tw"', function () {
            expect(REGIONS[3][1]).toStrictEqual('tw');
        });
    });
    describe('Property 5', function () {
        test('value should be an array', function () {
            expect(typeof REGIONS[5]).toBeTruthy();
            expect(REGIONS[5].constructor === Array).toBe(true);
        });
        test('value array should contain 1 element', function () {
            expect(REGIONS[5].length).toStrictEqual(1);
        });
        test('index 0 of value array should be equal to "cn"', function () {
            expect(REGIONS[5][0]).toStrictEqual('cn');
        });
    });
});
//# sourceMappingURL=constants.REGIONS.test.js.map