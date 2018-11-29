"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../lib/utils");
var constants_1 = __importDefault(require("../../lib/constants"));
var REGIONS = constants_1.default.REGIONS;
var getRegionNameById = utils_1.BattleNetUtils.getRegionNameById;
describe('getRegionNameById()', function () {
    test('should be defined', function () {
        expect(getRegionNameById).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getRegionNameById).toBe('function');
    });
    test.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    input | expectedResult\n    ", "  | ", "\n    ", "  | ", "\n    ", "  | ", "\n    ", "  | ", "\n  "], ["\n    input | expectedResult\n    ", "  | ", "\n    ", "  | ", "\n    ", "  | ", "\n    ", "  | ", "\n  "])), 1, REGIONS[1], 2, REGIONS[2], 3, REGIONS[3], 5, REGIONS[5])('returns $expectedResult for region id $input as integer', function (_a) {
        var input = _a.input, expectedResult = _a.expectedResult;
        expect(getRegionNameById(parseInt(input, 10))).toBe(expectedResult);
    });
    test.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    input  | expectedResult\n    ", " | ", "\n    ", " | ", "\n    ", " | ", "\n    ", " | ", "\n  "], ["\n    input  | expectedResult\n    ", " | ", "\n    ", " | ", "\n    ", " | ", "\n    ", " | ", "\n  "])), '1', REGIONS[1], '2', REGIONS[2], '3', REGIONS[3], '5', REGIONS[5])('returns $expectedResult for region id $input as string', function (_a) {
        var input = _a.input, expectedResult = _a.expectedResult;
        expect(getRegionNameById(input)).toBe(expectedResult);
    });
    test.each(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    input      | expectedResult\n    ", "    | ", "\n    ", "  | ", "\n    ", " | ", "\n    ", "    | ", "\n    ", " | ", "\n    ", "  | ", "\n    ", "  | ", "\n    ", "   | ", "\n  "], ["\n    input      | expectedResult\n    ", "    | ", "\n    ", "  | ", "\n    ", " | ", "\n    ", "    | ", "\n    ", " | ", "\n    ", "  | ", "\n    ", "  | ", "\n    ", "   | ", "\n  "])), '10', RangeError, '9999', RangeError, '23232', RangeError, 'a1', RangeError, 'adasf', RangeError, '1abc', RangeError, '!@#$', RangeError, '><1', RangeError)('throws $expectedResult for $input as string', function (_a) {
        var input = _a.input, expected = _a.expected;
        expect(function () {
            getRegionNameById(input);
        }).toThrow(expected);
    });
    test.each(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    input    | expectedResult\n    ", "    | ", "\n    ", "  | ", "\n    ", " | ", "\n    ", "     | ", "\n    ", "   | ", "\n    ", "    | ", "\n  "], ["\n    input    | expectedResult\n    ", "    | ", "\n    ", "  | ", "\n    ", " | ", "\n    ", "     | ", "\n    ", "   | ", "\n    ", "    | ", "\n  "])), 10, RangeError, 9999, RangeError, 23232, RangeError, 0, RangeError, -32, RangeError, -5, RangeError)('throws $expectedResult for $input as number', function (_a) {
        var input = _a.input, expected = _a.expected;
        expect(function () {
            getRegionNameById(parseInt(input, 10));
        }).toThrow(expected);
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=utils.getRegionNameById.test.js.map