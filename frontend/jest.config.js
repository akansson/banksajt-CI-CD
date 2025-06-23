const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add setup file to configure mocks and global test utilities
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // Optional: specify test file patterns
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
    "**/*.(test|spec).(js|jsx|ts|tsx)",
  ],
  // Optional: coverage collection
  collectCoverageFrom: [
    "pages/**/*.{js,jsx}",
    "!pages/_app.js",
    "!pages/_document.js",
    "!pages/api/**",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
