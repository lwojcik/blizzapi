"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("../../lib/utils"));
var constants_1 = __importDefault(require("../../lib/constants"));
var REGIONS = constants_1.default.REGIONS;
var getAllRegionIds = utils_1.default.getAllRegionIds;
describe('getAllRegionIds()', function () {
    test('should be defined', function () {
        expect(getAllRegionIds).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getAllRegionIds).toBe('function');
    });
    test('should return an array', function () {
        expect(typeof getAllRegionIds()).toBeTruthy();
        expect(getAllRegionIds().constructor === Array).toBe(true);
    });
    test('number of returned elements should match constants.REGIONS length', function () {
        expect(getAllRegionIds().length).toEqual(Object.keys(REGIONS).length);
    });
    test('returned array elements should be integers', function () {
        var isInteger = function (element) { return typeof element === 'number'; };
        expect(getAllRegionIds().every(isInteger)).toBe(true);
    });
});
//# sourceMappingURL=utils.getAllRegionIds.test.js.map