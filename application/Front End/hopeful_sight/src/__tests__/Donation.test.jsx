import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "./mockStore";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DonationAmount } from "../components/DonationAmount";
import { useAxiosWithToken } from "../hooks/axios";
import { DonationConfirm } from "../components/DonationConfirm";

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

vi.mock("../hooks/axios", () => ({
  default: vi.fn(() => ({
    post: vi.fn(),
  })),
  useAxiosWithToken: vi.fn(() => ({
    post: vi.fn(),
  })),
}));

describe("Testing Donation feature", () => {
  const mockSetStep = vi.fn();
  const mockUseSelector = vi.fn();
  const mockUseDispatch = vi.fn();
  const mockNavigate = vi.fn();
  const mockAxiosPost = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();

    vi.mocked(useSelector).mockImplementation(mockUseSelector);
    vi.mocked(useDispatch).mockReturnValue(mockUseDispatch);
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    mockUseSelector.mockReturnValue({
      account: {
        donator: {
          donator_id: "1",
        },
      },
    });

    vi.mocked(useAxiosWithToken).mockReturnValue({
      post: mockAxiosPost,
    });
  });

  it("renders donation amount component correctly", () => {
    render(
      <Provider store={mockStore({})}>
        <BrowserRouter>
          <DonationAmount setStep={mockSetStep} />
        </BrowserRouter>
      </Provider>,
    );

    expect(
      screen.getByText("Support The Cause. Donate Now. 🌟"),
    ).toBeInTheDocument();
    expect(screen.getByText("Quick Donation Amounts")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
  });

  it("selects quick donation amount", () => {
    render(
      <Provider store={mockStore({})}>
        <BrowserRouter>
          <DonationAmount setStep={1} />
        </BrowserRouter>
      </Provider>,
    );

    const TenButton = screen.getByTestId("$10");
    const TwentyButton = screen.getByTestId("$20");
    const FiftyButton = screen.getByTestId("$50");
    fireEvent.click(TenButton);
    const donationInput = screen.getByTestId("donation amount");
    expect(donationInput.value).toBe("10");

    fireEvent.click(TwentyButton);
    expect(donationInput.value).toBe("20");

    fireEvent.click(FiftyButton);
    expect(donationInput.value).toBe("50");
  });

  it("validates donation amount", () => {
    render(
      <Provider store={mockStore({})}>
        <BrowserRouter>
          <DonationAmount setStep={mockSetStep} />
        </BrowserRouter>
      </Provider>,
    );

    const donateButton = screen.getByText("Donate");

    // Try submitting with 0
    fireEvent.change(screen.getByTestId("donation amount"), {
      target: { value: "0" },
    });
    fireEvent.click(donateButton);

    expect(
      screen.getByText("Please enter a valid donation amount."),
    ).toBeInTheDocument();
  });

  it("submits donation successfully", async () => {
    mockAxiosPost.mockResolvedValue({ data: {} });

    render(
      <Provider store={mockStore({})}>
        <BrowserRouter>
          <DonationAmount setStep={mockSetStep} />
        </BrowserRouter>
      </Provider>,
    );

    // Select a region and enter donation amount
    fireEvent.change(screen.getByTestId("donation amount"), {
      target: { value: "25" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "West" },
    });

    const donateButton = screen.getByText("Donate");
    fireEvent.click(donateButton);

    await waitFor(() => {
      expect(mockAxiosPost).toHaveBeenCalledWith(
        "/api/donation/",
        expect.objectContaining({
          amount: "25",
          region: 1,
        }),
      );
      expect(mockSetStep).toHaveBeenCalled();
    });
  });

  it("handles donation success", () => {
    render(
      <Provider store={mockStore(true, true)}>
        <BrowserRouter>
          <DonationConfirm />
        </BrowserRouter>
      </Provider>,
    );
    expect(
      screen.getByText("Your donation has been received successfully."),
    ).toBeInTheDocument();
  });
});
