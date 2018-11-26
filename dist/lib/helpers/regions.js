"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../constants"));
function getAllRegions() {
    return constants_1.default.REGIONS;
}
exports.getAllRegions = getAllRegions;
function getAllRegionIds() {
    var regionKeys = Object.keys(constants_1.default.REGIONS);
    var regionKeysAsIntegers = regionKeys.map(function (regionKey) { return parseInt(regionKey, 10); });
    return regionKeysAsIntegers;
}
exports.getAllRegionIds = getAllRegionIds;
function getAllRegionNames() {
    var _a;
    var regionNames = Object.values(constants_1.default.REGIONS);
    var flattenedRegionNames = (_a = []).concat.apply(_a, regionNames);
    var regionNamesAsStrings = flattenedRegionNames.map(function (regionName) { return regionName.toString(); });
    return regionNamesAsStrings;
}
exports.getAllRegionNames = getAllRegionNames;
function getRegionNameById(regionId) {
    var regionIds = Object.keys(constants_1.default.REGIONS);
    var regionIdAsString = regionId.toString();
    var isRegionIdValid = regionIds.includes(regionIdAsString);
    if (!isRegionIdValid) {
        throw new RangeError(regionIdAsString + " is not a valid parameter for getRegionNameById");
    }
    return constants_1.default.REGIONS[regionIdAsString];
}
exports.getRegionNameById = getRegionNameById;
;
//# sourceMappingURL=regions.js.map