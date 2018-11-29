"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../lib/utils");
var getAllRegions = utils_1.BattleNetUtils.getAllRegions, getAllRegionIds = utils_1.BattleNetUtils.getAllRegionIds, getRegionNameById = utils_1.BattleNetUtils.getRegionNameById;
describe('BattleNetUtils', function () {
    test('should be defined', function () {
        expect(utils_1.BattleNetUtils).toBeDefined();
    });
    test('should be of type "Object"', function () {
        expect(utils_1.BattleNetUtils).toBeTruthy();
        expect(typeof utils_1.BattleNetUtils).toBe('object');
    });
    test('should expose method getAllRegions()', function () {
        expect(getAllRegions).toBeDefined();
        expect(getAllRegions).toBeTruthy();
        expect(typeof getAllRegions).toBe('function');
    });
    test('should expose method getAllRegionIds()', function () {
        expect(getAllRegionIds).toBeDefined();
        expect(getAllRegionIds).toBeTruthy();
        expect(typeof getAllRegionIds).toBe('function');
    });
    test('should expose method getAllRegionNames()', function () {
        expect(getAllRegionIds).toBeDefined();
        expect(getAllRegionIds).toBeTruthy();
        expect(typeof getAllRegionIds).toBe('function');
    });
    test('should expose method getRegionNameById()', function () {
        expect(getRegionNameById).toBeDefined();
        expect(getRegionNameById).toBeTruthy();
        expect(typeof getRegionNameById).toBe('function');
    });
});
//# sourceMappingURL=utils.test.js.map