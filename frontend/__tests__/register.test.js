import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Register from "../pages/register";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock fetch
global.fetch = jest.fn();

describe("Register Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
    fetch.mockClear();
  });

  it("renders the registration form", () => {
    render(<Register />);

    // Check if the main elements are present
    expect(
      screen.getByRole("heading", { name: "Create Account" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create Account" })
    ).toBeInTheDocument();
  });
});
