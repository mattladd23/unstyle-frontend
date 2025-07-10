import { describe, it, expect } from "vitest";
import getPropertyName from "./getPropertyName";

describe("getPropertyName", () => {
  it("returns the last segment of a URL", () => {
    const result = getPropertyName("https://developer.mozilla.org/en-US/docs/Web/CSS/background-color");
    expect(result).toBe("background-color");
  });

  it("returns empty string if URL ends with a slash", () => {
    const result = getPropertyName("https://developer.mozilla.org/en-US/docs/Web/CSS/");
    expect(result).toBe("");
  });

  it("returns the input if no slashes are present", () => {
    const result = getPropertyName("background-color");
    expect(result).toBe("background-color");
  });  

  it("handles trailing slashes and empty input", () => {
    expect(getPropertyName("")).toBe("");
    expect(getPropertyName("/")).toBe("");
    expect(getPropertyName("////")).toBe("");
  });
});
