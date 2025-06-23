import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Account from "../pages/account";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  removeItem: jest.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

// Mock fetch
global.fetch = jest.fn();

describe("Account Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
    mockLocalStorage.getItem.mockReturnValue("fake-token");
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ balance: 1000 }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the account page with balance section", async () => {
    render(<Account />);

    // Check if the main elements are present
    expect(screen.getByText("Your Account")).toBeInTheDocument();
    expect(screen.getByText("Current Balance")).toBeInTheDocument();
    expect(screen.getByText("Deposit Money")).toBeInTheDocument();
  });
});
