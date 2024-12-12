import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, describe, beforeEach, it, expect } from "vitest";
import mockStore from "./mockStore";
import { SignInForm } from "../components/SignInForm";
import { Provider } from "react-redux";
import { setAuth } from "../app/features/userSlice";

const setHasAccount = vi.fn();
const mockNavigate = vi.fn();
const mockDispatch = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("../hooks/axios", () => ({
  axiosDefault: {
    post: vi.fn(),
  },
  useAxiosWithToken: () => ({
    get: vi.fn(),
  }),
}));

vi.mock("react-redux", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Provider: ({ children }) => children,
    useDispatch: () => mockDispatch,
  };
});

describe("SignInForm", () => {
  let store;

  beforeEach(() => {
    vi.resetAllMocks();

    store = mockStore({
      user: {
        auth_token: null,
        userData: null,
      },
    });
  });

  it("renders initial login form correctly", () => {
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

  it("displays error when fields are empty", async () => {
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

  it("calls the login API and navigates on successful login", async () => {
    const { axiosDefault } = await import("../hooks/axios");
    const { useAxiosWithToken } = await import("../hooks/axios");

    const userData = { username: "test", email: "test@example.com" };
    const tokenData = { auth_token: "valid-token" };

    axiosDefault.post.mockResolvedValueOnce({
      status: 200,
      data: tokenData,
    });

    useAxiosWithToken().get.mockResolvedValueOnce({
      status: 200,
      data: userData,
    });

    render(
      <Provider store={store}>
        <SignInForm setHasAccount={setHasAccount} />
      </Provider>,
    );

    fireEvent.change(screen.getByTestId("username"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Sign In"));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(setAuth(tokenData.auth_token));
    });
  });

  it("toggles account creation view", () => {
    render(
      <Provider store={store}>
        <SignInForm setHasAccount={setHasAccount} />
      </Provider>,
    );

    fireEvent.click(screen.getByText("Need an Account?"));

    expect(setHasAccount).toHaveBeenCalled();
  });
});
