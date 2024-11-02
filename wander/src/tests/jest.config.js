// packages/tests/jest.config.js
const nextJest = require("next/jest");
const path = require("path");

const createJestConfig = nextJest({
  dir: path.resolve(__dirname, "../app"), // Point to the Next.js app directory
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/../components/$1", // Adjust the paths
    "^@/pages/(.*)$": "<rootDir>/../app/pages/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
