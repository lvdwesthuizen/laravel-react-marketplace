import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Login from "./Login";

describe("Login page renders", () => {
  it("renders the Login page", () => {
    const { getByText } = render(<Login />);
    expect(getByText(/log in/i)).toBeInTheDocument();
  });

  it("renders two input components", () => {
    const { getByLabelText } = render(<Login />);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<Login />);
    expect(getByText("Submit")).toBeInTheDocument();
  });
});
