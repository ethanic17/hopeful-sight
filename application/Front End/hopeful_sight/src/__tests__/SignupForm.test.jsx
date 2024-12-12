import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SignUpForm } from "../components/SignUpForm";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "./mockStore";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/features/userSlice";

let mockGet = vi.fn();

vi.mock("../hooks/axios", () => ({
  useAxiosWithToken: () => {
    return { get: mockGet };
  },
  axiosDefault: {
    post: vi.fn(),
  },
}));

const store = mockStore(false, false);

describe("SignUpForm", () => {
  let store;

  beforeEach(() => {
    store = mockStore(false, false);
    store.dispatch = vi.fn();
  });

  it("renders the initial step correctly", () => {
    render(
      <Provider store={store}>
        <SignUpForm setHasAccount={vi.fn()} />
      </Provider>,
    );

    expect(screen.getByText("Get Started")).toBeInTheDocument();
    expect(screen.getByTestId("enter your email")).toBeInTheDocument();
    expect(screen.getByTestId("enter your username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("transitions to account type selection after signing up", async () => {
    const mockSetHasAccount = vi.fn();
    const { axiosDefault } = await import("../hooks/axios");

    render(
      <Provider store={store}>
        <SignUpForm setHasAccount={mockSetHasAccount} />
      </Provider>,
    );

    const emailInput = screen.getByTestId("enter your email");
    const usernameInput = screen.getByTestId("enter your username");
    const passwordInput = screen.getByTestId("password");
    const signUpButton = screen.getByText("Sign Up");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    axiosDefault.post.mockResolvedValueOnce({
      data: { id: 1 },
      status: 201,
    });
    axiosDefault.post.mockResolvedValueOnce({
      data: { id: 1, auth_token: "TEST_TOKEN" },
      status: 201,
    });

    mockGet.mockResolvedValueOnce({
      data: { me: "test user" },
      status: 200,
    });

    fireEvent.click(signUpButton);

    expect(
      await screen.findByText("Choose Your Account Type"),
    ).toBeInTheDocument();
  });

  it("mocks the useState value", () => {
    render(
      <Provider store={store}>
        <SignUpForm testState={1} setHasAccount={vi.fn()} />
      </Provider>,
    );

    expect(screen.getByText("Be a Giver")).toBeInTheDocument();
    expect(screen.getByText("Be a Receiver")).toBeInTheDocument();
  });
});
