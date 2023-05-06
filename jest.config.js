module.exports = {
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/src/config/tests/setupTests.ts'],
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    coverageReporters: ['json-summary', 'text', 'lcov'],
    coveragePathIgnorePatterns: [
      'styles.ts',
      'styled.ts',
    ],
    collectCoverageFrom: [
      'src/app/components/**/*.{ts,tsx}',
      'src/app/pages/**/*.{ts,tsx}',
    ],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      "^.+\\.jsx?$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "<rootDir>/src/config/tests/fileMock.js",
    },
    moduleNameMapper: {
      '^root(.*)$': '<rootDir>/src$1',
      '^app(.*)$': '<rootDir>/src/app$1',
      '^core(.*)$': '<rootDir>/src/core$1',
      '^config(.*)$': '<rootDir>/src/config$1',       
      '^contracts(.*)$': '<rootDir>/src/contracts$1',       
    },
  }