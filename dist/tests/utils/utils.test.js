"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("../../lib/utils"));
describe('Utils', function () {
    test('should be defined', function () {
        expect(utils_1.default).toBeDefined();
    });
    test('should be of type "Object"', function () {
        expect(utils_1.default).toBeTruthy();
        expect(typeof utils_1.default).toBe('object');
    });
});
//# sourceMappingURL=utils.test.js.map