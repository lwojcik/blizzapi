"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var regions_1 = __importDefault(require("./localization/regions"));
var locales_1 = __importDefault(require("./localization/locales"));
var defaultLocales_1 = __importDefault(require("./localization/defaultLocales"));
var hosts_1 = __importDefault(require("./api/hosts"));
var sc2realms_1 = __importDefault(require("./localization/sc2realms"));
var authorizeUris_1 = __importDefault(require("./oauth/authorizeUris"));
var tokenUris_1 = __importDefault(require("./oauth/tokenUris"));
var checkTokenUris_1 = __importDefault(require("./oauth/checkTokenUris"));
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    CONSTANTS.REGIONS = regions_1.default;
    CONSTANTS.LOCALES = locales_1.default;
    CONSTANTS.DEFAULT_LOCALES = defaultLocales_1.default;
    CONSTANTS.REGION_API_HOSTS = hosts_1.default;
    CONSTANTS.SC2_REALMS = sc2realms_1.default;
    CONSTANTS.OAUTH_AUTHORIZE_URIS = authorizeUris_1.default;
    CONSTANTS.OAUTH_TOKEN_URIS = tokenUris_1.default;
    CONSTANTS.OAUTH_CHECK_TOKEN_URIS = checkTokenUris_1.default;
    return CONSTANTS;
}());
exports.default = CONSTANTS;
//# sourceMappingURL=index.js.map