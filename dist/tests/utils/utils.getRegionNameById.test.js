"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("../../lib/utils"));
var getRegionNameById = utils_1.default.getRegionNameById;
describe('getRegionNameById()', function () {
    test('should be defined', function () {
        expect(getRegionNameById).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getRegionNameById).toBe('function');
    });
});
//# sourceMappingURL=utils.getRegionNameById.test.js.map