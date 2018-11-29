"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../../../lib/constants"));
var OAUTH_TOKEN_URIS = constants_1.default.OAUTH_TOKEN_URIS;
describe('OAUTH_TOKEN_URIS', function () {
    test('should be defined', function () {
        expect(OAUTH_TOKEN_URIS).toBeDefined();
    });
    test('should contain 4 elements', function () {
        expect(Object.keys(OAUTH_TOKEN_URIS).length).toStrictEqual(4);
    });
    test('should contain property "1"', function () {
        expect(OAUTH_TOKEN_URIS[1]).toBeDefined();
    });
    test('property "1" should be equal to "https://us.battle.net/oauth/token"', function () {
        expect(OAUTH_TOKEN_URIS[1]).toStrictEqual('https://us.battle.net/oauth/token');
    });
    test('should contain property "2"', function () {
        expect(OAUTH_TOKEN_URIS[2]).toBeDefined();
    });
    test('property "2" should be equal to "https://eu.battle.net/oauth/token"', function () {
        expect(OAUTH_TOKEN_URIS[2]).toStrictEqual('https://eu.battle.net/oauth/token');
    });
    test('should contain property "3"', function () {
        expect(OAUTH_TOKEN_URIS[3]).toBeDefined();
    });
    test('property "3" should be equal to "https://apac.battle.net/oauth/token"', function () {
        expect(OAUTH_TOKEN_URIS[3]).toStrictEqual('https://apac.battle.net/oauth/token');
    });
    test('should contain property "5"', function () {
        expect(OAUTH_TOKEN_URIS[5]).toBeDefined();
    });
    test('property "5" should be equal to "https://www.battlenet.com.cn/oauth/token"', function () {
        expect(OAUTH_TOKEN_URIS[5]).toStrictEqual('https://www.battlenet.com.cn/oauth/token');
    });
});
//# sourceMappingURL=constants.OAUTH_TOKEN_URIS.test.js.map