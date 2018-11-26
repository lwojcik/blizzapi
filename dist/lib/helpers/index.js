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
var BattleNetHelpers = (function () {
    function BattleNetHelpers() {
    }
    BattleNetHelpers.getAllRegions = function () {
        return regions.getAllRegions();
    };
    return BattleNetHelpers;
}());
exports.BattleNetHelpers = BattleNetHelpers;
//# sourceMappingURL=index.js.map