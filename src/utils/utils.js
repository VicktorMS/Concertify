import { arrayToString } from "./utils";

describe("arrayToString", () => {
  test("returns a string representation of the array", () => {
    // Mock array
    const array = ["apple", "banana", "cherry", "date"];

    const result = arrayToString(array);
    expect(result).toBe("apple,banana,cherry,date");
  });

  test("returns a string representation of the array with specified arraySize", () => {
    const array = ["apple", "banana", "cherry", "date"];

    const result = arrayToString(array, 2);
    expect(result).toBe("apple,banana");
  });

  test("returns an empty string when the array is empty", () => {
    const result = arrayToString([]);
    expect(result).toBe("");
  });
});
