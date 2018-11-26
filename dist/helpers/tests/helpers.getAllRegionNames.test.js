"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../helpers"));
var constants_1 = __importDefault(require("../../constants/constants"));
var REGIONS = constants_1.default.REGIONS;
var getAllRegionNames = helpers_1.default.getAllRegionNames;
describe('getAllRegionNames()', function () {
    test('should be defined', function () {
        expect(getAllRegionNames).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getAllRegionNames).toBe('function');
    });
    test('should return an array', function () {
        expect(typeof getAllRegionNames()).toBeTruthy();
        expect(getAllRegionNames().constructor === Array).toBe(true);
    });
    test('number of returned elements should match length of constants.REGIONS values after flattening', function () {
        var _a;
        var flattenedRegionsLength = (_a = []).concat.apply(_a, Object.values(REGIONS)).length;
        expect(getAllRegionNames().length).toEqual(flattenedRegionsLength);
    });
});
//# sourceMappingURL=helpers.getAllRegionNames.test.js.map