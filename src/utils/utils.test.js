import { arrayToString } from "./utils";

describe("arrayToString", () => {
  it("returns a string representation of the array", () => {
    // Mock array
    const array = ["apple", "banana", "cherry", "date"];

    const result = arrayToString(array);
    expect(result).toBe("apple,banana,cherry,date");
  });

  it("returns a string representation of the array with specified arraySize", () => {
    const array = ["apple", "banana", "cherry", "date"];

    const result = arrayToString(array, 2);
    expect(result).toBe("apple,banana");
  });

  it("returns an empty string when the array is empty", () => {
    const result = arrayToString([]);
    expect(result).toBe("");
  });
});
