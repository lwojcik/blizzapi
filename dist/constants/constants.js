"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    CONSTANTS.REGIONS = {
        1: 'us',
        2: 'eu',
        3: ['kr', 'tw'],
        5: 'cn',
    };
    CONSTANTS.LOCALES = {
        1: ['en_US', 'es_MX', 'pt_BR'],
        2: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
        3: ['ko_KR', 'zh_TW'],
        5: ['zh_CN'],
    };
    CONSTANTS.DEFAULT_LOCALES = {
        1: 0,
        2: 0,
        3: 0,
        5: 0,
    };
    CONSTANTS.SERVERS = {
        1: 'https://us.api.blizzard.com',
        2: 'https://eu.api.blizzard.com',
        3: 'https://kr.api.blizzard.com',
        5: 'https://api.blizzard.com.cn',
    };
    CONSTANTS.SC2_REALMS = {
        1: [1, 2],
        2: [1, 2],
        3: [1, 2],
        5: [1],
    };
    CONSTANTS.OAUTH_AUTHORIZE_SERVERS = {
        1: 'https://us.battle.net/oauth/authorize',
        2: 'https://eu.battle.net/oauth/authorize',
        3: 'https://apac.battle.net/oauth/authorize',
        5: 'https://www.battlenet.com.cn/oauth/authorize',
    };
    CONSTANTS.OAUTH_TOKEN_URIS = {
        1: 'https://us.battle.net/oauth/token',
        2: 'https://eu.battle.net/oauth/token',
        3: 'https://apac.battle.net/oauth/token',
        5: 'https://www.battlenet.com.cn/oauth/token',
    };
    CONSTANTS.OAUTH_CHECK_TOKEN_URIS = {
        1: 'https://us.battle.net/oauth/check_token?token=',
        2: 'https://eu.battle.net/oauth/check_token?token=',
        3: 'https://apac.battle.net/oauth/check_token?token=',
        5: 'https://www.battlenet.com.cn/oauth/check_token?token=',
    };
    return CONSTANTS;
}());
exports.default = CONSTANTS;
//# sourceMappingURL=constants.js.map