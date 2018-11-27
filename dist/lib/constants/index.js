"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var regions_1 = __importDefault(require("./regions"));
var locales_1 = __importDefault(require("./locales"));
var defaultLocales_1 = __importDefault(require("./defaultLocales"));
var hosts_1 = __importDefault(require("./hosts"));
var sc2realms_1 = __importDefault(require("./sc2realms"));
var oAuthAuthorizeUris_1 = __importDefault(require("./oAuthAuthorizeUris"));
var oAuthTokenUris_1 = __importDefault(require("./oAuthTokenUris"));
var oAuthCheckTokenUris_1 = __importDefault(require("./oAuthCheckTokenUris"));
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    CONSTANTS.REGIONS = regions_1.default;
    CONSTANTS.LOCALES = locales_1.default;
    CONSTANTS.DEFAULT_LOCALES = defaultLocales_1.default;
    CONSTANTS.HOSTS = hosts_1.default;
    CONSTANTS.SC2_REALMS = sc2realms_1.default;
    CONSTANTS.OAUTH_AUTHORIZE_URIS = oAuthAuthorizeUris_1.default;
    CONSTANTS.OAUTH_TOKEN_URIS = oAuthTokenUris_1.default;
    CONSTANTS.OAUTH_CHECK_TOKEN_URIS = oAuthCheckTokenUris_1.default;
    return CONSTANTS;
}());
exports.default = CONSTANTS;
//# sourceMappingURL=index.js.map