import React from 'react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResultsList from "./ResultsList";
import * as api from "../utils/api";
import * as usehooks from "usehooks-ts";

const mockData = [
  {
    id: "1",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
    initialValue: "canvastext",
  },
  {
    id: "2",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
    initialValue: "transparent",
  },
];

vi.mock("../utils/api", async () => {
  const actual = await vi.importActual<typeof import("../utils/api")>("../utils/api");
  return {
    ...actual,
    fetchResults: vi.fn(),
  };
});

vi.mock("usehooks-ts", async () => {
  const actual = await vi.importActual<typeof import("usehooks-ts")>("usehooks-ts");
  return {
    ...actual,
    useCopyToClipboard: vi.fn(),
  };
});

describe("<ResultsList />", () => {
  const mockCopy = vi.fn(() => Promise.resolve());

  beforeEach(() => {
    vi.clearAllMocks();
    (api.fetchResults as Mock).mockResolvedValue(mockData);
    (usehooks.useCopyToClipboard as Mock).mockReturnValue([null, mockCopy]);
  });

  it("shows fallback message when search term is empty", async () => {
    render(<ResultsList searchTerm="" />);
    expect(await screen.findByText(/Your results will appear here/i)).toBeInTheDocument();
  });

  it("renders results that match the search term", async () => {
    render(<ResultsList searchTerm="color" />);
    await waitFor(() => {
      expect(screen.getByText("color")).toBeInTheDocument();
      expect(screen.getByText(/canvastext/i)).toBeInTheDocument();
      expect(screen.getByText("background-color")).toBeInTheDocument();
    });
  });

  it("renders no results message if nothing matches", async () => {
    render(<ResultsList searchTerm="banana" />);
    expect(await screen.findByText(/No results found/i)).toBeInTheDocument();
    expect(screen.getByText(/Try a different search term/i)).toBeInTheDocument();
  });

  it("calls copy function when a code snippet is clicked", async () => {
    render(<ResultsList searchTerm="color" />);
    const code = await screen.findByText("color: canvastext;");
    await userEvent.click(code);
    await waitFor(() => {
      expect(mockCopy).toHaveBeenCalledWith("color: canvastext;");
    });
  });

  it("renders multiple Result components when multiple match", async () => {
    render(<ResultsList searchTerm="color" />);
    await waitFor(() => {
      expect(screen.getByText("color")).toBeInTheDocument();
      expect(screen.getByText("background-color")).toBeInTheDocument();
    });
  });

  it("does not render results if API returns empty array", async () => {
    (api.fetchResults as Mock).mockResolvedValue([]);
    render(<ResultsList searchTerm="color" />);
    expect(await screen.findByText(/no results found/i)).toBeInTheDocument();
  });
});
