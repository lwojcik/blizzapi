"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../helpers"));
var getRegionNameById = helpers_1.default.getRegionNameById;
describe('getRegionNameById()', function () {
    test('should be defined', function () {
        expect(getRegionNameById).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getRegionNameById).toBe('function');
    });
});
//# sourceMappingURL=helpers.getRegionNameById.test.js.map