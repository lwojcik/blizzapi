"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var regions_1 = __importDefault(require("./regions"));
var locales_1 = __importDefault(require("./locales"));
var defaultLocales_1 = __importDefault(require("./defaultLocales"));
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    CONSTANTS.REGIONS = regions_1.default;
    CONSTANTS.LOCALES = locales_1.default;
    CONSTANTS.DEFAULT_LOCALES = defaultLocales_1.default;
    return CONSTANTS;
}());
exports.default = CONSTANTS;
//# sourceMappingURL=index.js.map