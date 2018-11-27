"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../helpers"));
describe('Helpers', function () {
    test('should be defined', function () {
        expect(helpers_1.default).toBeDefined();
    });
    test('should be of type "Object"', function () {
        expect(helpers_1.default).toBeTruthy();
        expect(typeof helpers_1.default).toBe('object');
    });
});
//# sourceMappingURL=helpers.test.js.map