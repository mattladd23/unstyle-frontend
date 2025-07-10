import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchContainer from "./SearchContainer";

describe("Search Container", () => {
  it("renders heading and subtext", () => {
    render(<SearchContainer searchInput="" setSearchTerm={() => {}} />);
    expect(screen.getByText(/Rapidly find CSS initial values/i)).toBeInTheDocument();
    expect(screen.getByText(/Simply enter a propery name below/i)).toBeInTheDocument();
  });

  it("renders placeholder correctly", () => {
    render(<SearchContainer searchInput="" setSearchTerm={() => {}} />);
    expect(screen.getByPlaceholderText(/"background-color"/i)).toBeInTheDocument();
  });

  it("renders FontAwesome icons", () => {
    render(<SearchContainer searchInput="" setSearchTerm={() => {}} />);
    expect(screen.getByTestId("rocket-icon")).toBeInTheDocument();
    expect(screen.getByTestId("magnifying-glass-icon")).toBeInTheDocument();
  });

  it("sets the input value from props", () => {
    render(<SearchContainer searchInput="color" setSearchTerm={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("color");
  });

  it("calls setSearchTerm on input change", () => {
    const mockSetSearchTerm = vi.fn();
    render(<SearchContainer searchInput="" setSearchTerm={mockSetSearchTerm} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "margin" } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith("margin");
  });
});
