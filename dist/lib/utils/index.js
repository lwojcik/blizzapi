"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var regions = __importStar(require("./regions"));
var BattleNetUtils = (function () {
    function BattleNetUtils() {
    }
    BattleNetUtils.getAllRegions = function () {
        return regions.getAllRegions();
    };
    BattleNetUtils.getAllRegionNames = function () {
        return regions.getAllRegionNames();
    };
    BattleNetUtils.getAllRegionIds = function () {
        return regions.getAllRegionIds();
    };
    BattleNetUtils.getRegionNameById = function (regionId) {
        return regions.getRegionNameById(regionId);
    };
    return BattleNetUtils;
}());
exports.default = BattleNetUtils;
//# sourceMappingURL=index.js.map