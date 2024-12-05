import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from "./mockStore";
import { GlassesCard } from "../components/GlassesCard";
import { describe, beforeEach, vi, it, expect } from "vitest";

const mockOnClick = vi.fn();

describe("GlassesCard Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore(false, false);
  });

  const renderWithStore = (ui, store) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  it("renders with default props", () => {
    renderWithStore(
      <GlassesCard
        onClick={mockOnClick}
        data={{
          name: "Test Glasses",
          description: "A great pair",
          inventory: 5,
          image: "test.jpg",
        }}
      />,
      store,
    );

    expect(screen.getByText("Test Glasses")).toBeInTheDocument();
    expect(screen.getByText("A great pair")).toBeInTheDocument();
    expect(screen.getByText("In Stock")).toBeInTheDocument();
    expect(screen.getByAltText("Test Glasses")).toHaveAttribute(
      "src",
      "test.jpg",
    );
  });

  it("shows 'Out Of Stock' overlay when inventory is 0", () => {
    renderWithStore(
      <GlassesCard
        onClick={mockOnClick}
        data={{
          name: "Test Glasses",
          description: "A great pair",
          inventory: 0,
          image: "test.jpg",
        }}
      />,
      store,
    );

    expect(screen.getByText("Out Of Stock")).toBeInTheDocument();
  });

  it("displays 'Popular – Running Low' for inventory <= 10", () => {
    store = mockStore(true, false);
    renderWithStore(
      <GlassesCard
        onClick={mockOnClick}
        data={{
          name: "Test Glasses",
          description: "A great pair",
          inventory: 10,
          image: "test.jpg",
        }}
      />,
      store,
    );

    expect(screen.getByText("Popular – Running Low")).toBeInTheDocument();
  });

  it("displays 'Needing Donation' if user is a donator", () => {
    store = mockStore(true, true);

    renderWithStore(
      <GlassesCard
        onClick={mockOnClick}
        data={{
          name: "Test Glasses",
          description: "A great pair",
          inventory: 5,
          image: "test.jpg",
        }}
      />,
      store,
    );

    expect(screen.getByText("Needing Donation")).toBeInTheDocument();
  });

  it("calls onClick with data when button is clicked", () => {
    store = mockStore(true, false);
    const testData = {
      name: "Test Glasses",
      description: "A great pair",
      inventory: 5,
      image: "test.jpg",
    };
    renderWithStore(
      <GlassesCard onClick={mockOnClick} data={testData} />,
      store,
    );

    const button = screen.getByRole("button", { name: /claim/i });
    fireEvent.click(button);

    expect(mockOnClick.mock.calls[0][0]).toEqual(testData);
  });
});
