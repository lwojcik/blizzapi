module.exports = {
  "preset": 'ts-jest',
  "testEnvironment": 'node',
  "roots": [
    "<rootDir>/"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**",
    "!**/tests/**.{js,ts}",
    "!**/*.{d.ts}",
    "!**/node_modules/**",
    "!**/dist/**"
  ],
  "automock": false,
  "moduleNameMapper": {
    "^src/(.*)": "<rootDir>/src/src/$1",
    "^classes/(.*)": "<rootDir>/src/classes/$1",
    "^constants/(.*)": "<rootDir>/src/constants/$1",
    "^helpers/(.*)": "<rootDir>/src/helpers/$1",
    "^utils/(.*)": "<rootDir>/src/utils/$1"
  },
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
}