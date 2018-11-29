"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var regions = __importStar(require("./localization/regions"));
var BattleNetUtils;
(function (BattleNetUtils) {
    function getAllRegions() {
        return regions.getAllRegions();
    }
    BattleNetUtils.getAllRegions = getAllRegions;
    function getAllRegionNames() {
        return regions.getAllRegionNames();
    }
    BattleNetUtils.getAllRegionNames = getAllRegionNames;
    function getAllRegionIds() {
        return regions.getAllRegionIds();
    }
    BattleNetUtils.getAllRegionIds = getAllRegionIds;
    function getRegionNameById(regionId) {
        return regions.getRegionNameById(regionId);
    }
    BattleNetUtils.getRegionNameById = getRegionNameById;
})(BattleNetUtils = exports.BattleNetUtils || (exports.BattleNetUtils = {}));
//# sourceMappingURL=index.js.map