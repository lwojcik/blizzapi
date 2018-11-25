"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../helpers"));
var constants_1 = __importDefault(require("../../constants/constants"));
var getAllRegions = helpers_1.default.getAllRegions;
describe('getAllRegions()', function () {
    test('should be defined', function () {
        expect(getAllRegions).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getAllRegions).toBe('function');
    });
    test('should return an object', function () {
        expect(typeof getAllRegions()).toBeTruthy();
        expect(typeof getAllRegions()).toBe('object');
    });
    test('returned object should match constants.REGIONS property', function () {
        expect(getAllRegions()).toMatchObject(constants_1.default.REGIONS);
    });
});
//# sourceMappingURL=helpers.getAllRegions.test.js.map