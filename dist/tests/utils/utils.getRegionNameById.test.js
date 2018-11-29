"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../lib/utils");
var getRegionNameById = utils_1.BattleNetUtils.getRegionNameById;
describe('getRegionNameById()', function () {
    test('should be defined', function () {
        expect(getRegionNameById).toBeDefined();
    });
    test('should be of type "function"', function () {
        expect(typeof getRegionNameById).toBe('function');
    });
});
//# sourceMappingURL=utils.getRegionNameById.test.js.map