import { render, screen } from "@testing-library/react";
import { AboutUs } from "../pages/About";
import { describe, it, expect } from "vitest";

describe("AboutUs", () => {
  it("renders the AboutUs component", () => {
    render(<AboutUs />);
    expect(screen.getByText(/Koby Kern/i)).toBeInTheDocument();
    expect(screen.getByText(/Miguel Maurer/i)).toBeInTheDocument();
  });
});
