/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  randomize: true,
  displayName: "JavaScript Agent Gen 2",
  silent: true,
  roots: [
    "<rootDir>/source"
  ],
  maxWorkers: "50%", // As recommended in jest.io https://jestjs.io/docs/configuration#maxworkers-number--string
  transform: {
    "^.+\\.(t|j)s$": ["@swc/jest", {
      sourceMaps: "inline",
      module: {
        strict: false,
        strictMode: false
      },

      jsc: {
        target: "es5",
        parser: {
          syntax: "typescript",
          dynamicImport: true
        },
        experimental: {
        }
      }
    }]
  },
  testMatch: [
    "**/*/*.spec.ts",
  ],
  moduleFileExtensions: ["ts", "js", "node", "json"],
  reporters: [
    "default",
  ],
  coverageDirectory: "test-results/coverage",
  // in ci npm test runs this with --coverage, so leave this off here to not slow down tests when executing locally
  collectCoverage: false,
  collectCoverageFrom: [
    "./source/**/*.ts",
  ],
  coverageReporters: [
    "json"
  ],
  coverageProvider: "v8",
  resetMocks: true,
  restoreMocks: true,
  resetModules: true,
  testEnvironmentOptions: {
    url: "http://localhost:3000/context.html" // NOSONAR
  }
};

export default config;
