"use strict";
var CONSTANTS = require('../constants');
describe('CONSTANTS object', function () {
    test('should be defined', function () {
        expect(CONSTANTS).toBeDefined();
    });
    test('should contain REGIONS property', function () {
        expect(CONSTANTS.REGIONS).toBeDefined();
    });
    test('should contain LOCALES property', function () {
        expect(CONSTANTS.LOCALES).toBeDefined();
    });
    test('should contain DEFAULT_LOCALES property', function () {
        expect(CONSTANTS.LOCALES).toBeDefined();
    });
    test('should contain SERVERS property', function () {
        expect(CONSTANTS.SERVERS).toBeDefined();
    });
    test('should contain SC2_REALMS property', function () {
        expect(CONSTANTS.SC2_REALMS).toBeDefined();
    });
    test('should contain OAUTH_AUTHORIZE_SERVERS property', function () {
        expect(CONSTANTS.SC2_REALMS).toBeDefined();
    });
    test('should contain OAUTH_TOKEN_URIS property', function () {
        expect(CONSTANTS.OAUTH_TOKEN_URIS).toBeDefined();
    });
    test('should contain OAUTH_CHECK_TOKEN_URIS property', function () {
        expect(CONSTANTS.OAUTH_CHECK_TOKEN_URIS).toBeDefined();
    });
});
//# sourceMappingURL=constants.test.js.map