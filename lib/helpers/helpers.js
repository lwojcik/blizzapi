"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var constants_1 = __importDefault(require("../constants/constants"));
var getAllRegions = function () { return constants_1.default.REGIONS; };
var getAllRegionIds = function () {
    var regionKeys = Object.keys(constants_1.default.REGIONS);
    var regionKeysAsIntegers = regionKeys.map(function (regionKey) { return parseInt(regionKey, 10); });
    return regionKeysAsIntegers;
};
var getAllRegionNames = function () {
    var _a;
    var regionNames = Object.values(constants_1.default.REGIONS);
    console.log(regionNames);
    var flattenedRegionNames = (_a = []).concat.apply(_a, regionNames);
    var regionNamesAsStrings = flattenedRegionNames.map(function (regionName) { return regionName.toString(); });
    return regionNamesAsStrings;
};
var getRegionNameById = function (regionId) {
    var regionIds = Object.keys(constants_1.default.REGIONS);
    var regionIdAsString = regionId.toString();
    var isRegionIdValid = regionIds.includes(regionIdAsString);
    if (!isRegionIdValid) {
        throw new RangeError(regionIdAsString + " is not a valid parameter for getRegionNameById");
    }
    return constants_1.default.REGIONS[regionIdAsString];
};
var helpers = {
    getAllRegions: getAllRegions,
    getAllRegionIds: getAllRegionIds,
    getAllRegionNames: getAllRegionNames,
    getRegionNameById: getRegionNameById,
};
module.exports = helpers;
//# sourceMappingURL=helpers.js.map