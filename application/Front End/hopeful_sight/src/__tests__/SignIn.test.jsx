import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi, describe, beforeEach, it, expect } from "vitest";
import mockStore from "./mockStore";
import { SignInForm } from "../components/SignInForm";

vi.mock("../hooks/axios", () => ({
  axiosDefault: {
    post: vi.fn(() => {
      console.log("axiosDefault.post called");
    }),
  },
  useAxiosWithToken: () => ({
    get: vi.fn(),
  }),
}));

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("SignInForm", () => {
  const setHasAccount = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders initial login form correctly", () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <SignInForm setHasAccount={setHasAccount} />
      </Provider>,
    );

    expect(screen.getByText("Welcome Back")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Need an Account?")).toBeInTheDocument();
  });

  it("makes sure it fails when there is no user input", async () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <SignInForm setHasAccount={setHasAccount} />
      </Provider>,
    );

    fireEvent.click(screen.getByText("Sign In"));

    await waitFor(() => {
      expect(screen.getByText("All Fields Are Required.")).toBeInTheDocument();
    });
  });
});
