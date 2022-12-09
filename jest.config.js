/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: "./test/coverage",
  collectCoverageFrom: [
    "./src/factory/*"
  ]
};