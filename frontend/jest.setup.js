import "@testing-library/jest-dom";

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock fetch globally
global.fetch = jest.fn();

// Mock next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      pathname: "/",
    };
  },
}));

// Clear all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});
