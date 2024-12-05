import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DonationForm } from "../components/DonationForm";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "./mockStore";

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useState: vi.fn(),
  };
});

describe("DonationForm", () => {
  const mockUseState = vi.mocked(useState);

  it("renders step 0 (PaymentForm)", () => {
    mockUseState.mockReturnValue([0, vi.fn()]);
    render(
      <BrowserRouter>
        <DonationForm currentGasses={[]} />
      </BrowserRouter>,
    );
    expect(
      screen.getByText("Transform Lives with the Gift of Sight"),
    ).toBeInTheDocument();
  });

  it("renders step 1 (DonationAmount)", () => {
    mockUseState.mockReturnValue([1, vi.fn()]);
    render(
      <Provider store={mockStore(true, false)}>
        <BrowserRouter>
          <DonationForm currentGasses={[]} />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText("Quick Donation Amounts")).toBeInTheDocument();
  });

  it("renders step 2 (DonationConfirm)", () => {
    mockUseState.mockReturnValue([2, vi.fn()]);
    render(
      <BrowserRouter>
        <DonationForm currentGasses={[]} />
      </BrowserRouter>,
    );
    expect(
      screen.getByText("Your donation has been received successfully."),
    ).toBeInTheDocument();
  });
});
