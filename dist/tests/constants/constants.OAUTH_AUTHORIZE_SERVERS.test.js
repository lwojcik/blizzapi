"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../constants"));
var OAUTH_AUTHORIZE_SERVERS = constants_1.default.OAUTH_AUTHORIZE_SERVERS;
describe('OAUTH_AUTHORIZE_SERVERS', function () {
    test('should be defined', function () {
        expect(OAUTH_AUTHORIZE_SERVERS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(OAUTH_AUTHORIZE_SERVERS).length).toEqual(4);
    });
    test('should contain property "1"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[1]).toBeDefined();
    });
    test('property "1" should be equal to "https://us.battle.net/oauth/authorize"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[1]).toEqual('https://us.battle.net/oauth/authorize');
    });
    test('should contain property "2"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[2]).toBeDefined();
    });
    test('property "2" should be equal to "https://eu.battle.net/oauth/authorize"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[2]).toEqual('https://eu.battle.net/oauth/authorize');
    });
    test('should contain property "3"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[3]).toBeDefined();
    });
    test('property "3" should be equal to "https://apac.battle.net/oauth/authorize"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[3]).toEqual('https://apac.battle.net/oauth/authorize');
    });
    test('should contain property "5"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[5]).toBeDefined();
    });
    test('property "5" should be equal to "https://www.battlenet.com.cn/oauth/authorize"', function () {
        expect(OAUTH_AUTHORIZE_SERVERS[5]).toEqual('https://www.battlenet.com.cn/oauth/authorize');
    });
});
//# sourceMappingURL=constants.OAUTH_AUTHORIZE_SERVERS.test.js.map