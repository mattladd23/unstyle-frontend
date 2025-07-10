import { fetchResults } from "./api";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { InitialValue } from "@/types/InitialValue";

const mockUrl = "https://api.unstyle.dev/initial-values";

describe("fetchResults", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns initialValues when fetch succeeds", async () => {
    const mockData = {
      initialValues: [
        { id: "alphanum123", url: "foo", initialValue: "bar" },
      ] as InitialValue[],
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const results = await fetchResults(mockUrl);
    expect(results).toEqual(mockData.initialValues);
    expect(global.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it("returns an empty array if initialValues is missing", async () => {
    const mockData = {};

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const results = await fetchResults(mockUrl);
    expect(results).toEqual([]);
  });

  it("throws an error if response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(fetchResults(mockUrl)).rejects.toThrow("HTTP error! status: 500");
  });

  it("throws on network or fetch error", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    await expect(fetchResults(mockUrl)).rejects.toThrow("Network error");
  });
});
