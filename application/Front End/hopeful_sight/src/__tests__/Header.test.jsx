import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Header } from "../components/Header";
import { describe, it, expect } from "vitest";
import userReducer from "../app/features/userSlice"; // adjust the path if necessary

const createMockStore = (loggedIn, donator) => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState: {
      user: {
        userInfo: {
          loggedIn,
          donator,
        },
      },
    },
  });
};

describe("Header", () => {
  it("applies the correct classes on NavLinks when clicked", () => {
    const store = createMockStore(true, false); // logged in, not a donator

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    // Grab all NavLinks
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About Us/i);
    const mapLink = screen.getByText(/Map/i);
    const accountLink = screen.getByText(/account/i); // Find Donate link

    // Assert that all NavLinks are inactive initially
    expect(homeLink).toHaveClass("text-sky-400");
    expect(aboutLink).toHaveClass("text-white");
    expect(mapLink).toHaveClass("text-white");
    expect(accountLink).toHaveClass("text-white");

    // Simulate click on Donate link
    fireEvent.click(accountLink);
    expect(accountLink).toHaveClass("text-sky-400"); // Donate should become active
    expect(homeLink).toHaveClass("text-white");
    expect(aboutLink).toHaveClass("text-white");
    expect(mapLink).toHaveClass("text-white");

    // Simulate click on Home link
    fireEvent.click(homeLink);
    expect(homeLink).toHaveClass("text-sky-400");
    expect(aboutLink).toHaveClass("text-white");
    expect(mapLink).toHaveClass("text-white");
    expect(accountLink).toHaveClass("text-white");

    // Simulate click on About Us link
    fireEvent.click(aboutLink);
    expect(homeLink).toHaveClass("text-white");
    expect(aboutLink).toHaveClass("text-sky-400");
    expect(mapLink).toHaveClass("text-white");
    expect(accountLink).toHaveClass("text-white");

    // Simulate click on Map link
    fireEvent.click(mapLink);
    expect(homeLink).toHaveClass("text-white");
    expect(aboutLink).toHaveClass("text-white");
    expect(mapLink).toHaveClass("text-sky-400");
    expect(accountLink).toHaveClass("text-white");
  });

  it("applies the correct classes on NavLinks when clicked(donatee)", () => {
    const store = createMockStore(true, true); // logged and is donator

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About Us/i);
    const mapLink = screen.getByText(/Map/i);
    const donateLink = screen.getByText(/Donate/i);

    fireEvent.click(donateLink);
    expect(homeLink).toHaveClass("text-white");
    expect(aboutLink).toHaveClass("text-white");
    expect(mapLink).toHaveClass("text-white");
    expect(donateLink).toHaveClass("text-sky-400");
  });

  it("renders Account link if logged in and not a donator", () => {
    const store = createMockStore(true, false); // logged in, not a donator

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/Account/i)).toBeInTheDocument();
    expect(screen.queryByText(/Donate/i)).toBeNull();
  });

  it("renders Donate link if logged in and a donator", () => {
    const store = createMockStore(true, true); // logged in, is a donator

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/Donate/i)).toBeInTheDocument();
    expect(screen.queryByText(/Account/i)).toBeNull();
  });

  it("does not render Donate link if not logged in", () => {
    const store = createMockStore(false, false); // not logged in

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.queryByText(/Account/i)).toBeNull();
    expect(screen.queryByText(/Donate/i)).toBeInTheDocument();
  });

  let store;
  const renderHeader = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

  it("renders the Account link when logged in and not a donator", () => {
    store = createMockStore(true, false);
    renderHeader();
    expect(screen.queryByText(/Donate/i)).toBeNull();
    expect(screen.getByText(/Account/i)).toBeInTheDocument();
  });

  it("renders the Donate link when logged in and a donator", () => {
    store = createMockStore(true, true);
    renderHeader();
    expect(screen.queryByText(/Account/i)).toBeNull();
    expect(screen.getByText(/Donate/i)).toBeInTheDocument();
  });

  it("renders neither Account nor Donate when not logged in", () => {
    store = createMockStore(false, false);
    renderHeader();
    expect(screen.queryByText(/Account/i)).toBeNull();
    expect(screen.queryByText(/Donate/i)).toBeInTheDocument();
  });
});
