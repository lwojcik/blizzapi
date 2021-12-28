module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  automock: false,
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**",
    "!**/tests/**.{js,ts}",
    "!**/*.{d.ts}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/src/types.d.ts",
  ],
  moduleDirectories: ["node_modules", "."],
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
};
