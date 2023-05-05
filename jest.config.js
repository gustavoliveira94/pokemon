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
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      "^.+\\.jsx?$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "<rootDir>/src/config/tests/fileMock.js",
    },
    transformIgnorePatterns: [
      "/node_modules/"
    ],
    moduleNameMapper: {
      '^root(.*)$': '<rootDir>/src$1',
      '^app(.*)$': '<rootDir>/src/app$1',
      '^core(.*)$': '<rootDir>/src/core$1',
      '^config(.*)$': '<rootDir>/src/config$1',       
    },
  }