import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/features/userSlice";
import appReducer from "../app/features/appSlice";
import { describe, it, expect } from "vitest";
import App from "../App";

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  preloadedState: {
    user: {
      token: "",
      userInfo: {
        loggedIn: false,
        username: null,
        email: null,
        donator: false,
        account: {},
      },
    },
    app: {
      loading: false,
    },
  },
});

describe("App", () => {
  it("renders the Home page for the default route", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const homeContent = screen.getByText(/Donate/i);
    expect(homeContent).toBeInTheDocument();
  });
});
