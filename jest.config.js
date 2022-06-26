module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  automock: false,
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "**/src/**",
    "!**/tests/**.{js,ts}",
    "!**/*.{d.ts}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/src/types.d.ts",
  ],
};
