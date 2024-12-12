import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";
import { DonationStatsPanel } from "../components/DonationStatsPanel";

vi.mock("../hooks/axios", () => ({
  default: vi.fn(() => ({
    get: vi.fn(() => {
      return {
        status: 200,
        data: [
          {
            donation_id: 1,
            amount: 330,
            date: "2024-11-08",
            region: 1,
            donator: 5,
          },
        ],
      };
    }),
  })),
}));

describe("DonationStatsPanel", () => {
  const mockAxios = {
    get: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();

    mockAxios.get.mockResolvedValueOnce({
      data: [
        {
          donation_id: 1,
          amount: 100,
          date: "2024-11-08",
          region: 1,
          donator: 5,
        },
      ],
    });
  });

  it("renders the donation summary", async () => {
    render(<DonationStatsPanel focusRegion={null} />);

    expect(screen.getByText("Donation Summary")).toBeInTheDocument();
    expect(screen.getByText("Loading donations...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Total Donations")).toBeInTheDocument();
      expect(screen.getByText("Total Donated:")).toBeInTheDocument();
      expect(screen.getByText("$330")).toBeInTheDocument();
    });
  });

  it("displays top donators for a focused region", async () => {
    // Mock the API call to return user details
    mockAxios.get.mockResolvedValueOnce({
      status: 200,
      data: { username: "Donor1" },
    });

    render(<DonationStatsPanel focusRegion="West" />);

    expect(screen.getByText("Donation Summary")).toBeInTheDocument();
    expect(screen.getByText("Loading donations...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Top Donations")).toBeInTheDocument();
      expect(screen.getByText("$330")).toBeInTheDocument();
    });
  });
});
