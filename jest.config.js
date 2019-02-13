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
    "**/src/**.{js,jsx,ts,tsx}",
    "!**/*.{d.ts}",
    "!**/node_modules/**",
    "!**/dist/**"
  ],
  "automock": false,
  "setupFiles": [
    "./setupJest.ts"
  ]
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
}