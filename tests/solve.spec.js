import solve from "../src/solve.js";

describe("solve", () => {
  it("should return false if matrix is empty", () => {
    const matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    expect(solve(matrix)).toBeFalsy();
  });

  it("should return true if matrix is solved", () => {
    const matrix = [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ];

    expect(solve(matrix)).toBeTruthy();
  });

  it("should return false if matrix is not solved", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(solve(matrix)).toBeFalsy();
  });

  it("should return false if matrix has negative number", () => {
    const matrix = [
      [2, 7, 6],
      [-9, 5, 1],
      [4, 3, 8],
    ];

    expect(solve(matrix)).toBeFalsy();
  });

  it("should return false if matrix has digit bigger than 9", () => {
    const matrix = [
      [2, 7, 6],
      [10, 5, 1],
      [4, 3, 8],
    ];

    expect(solve(matrix)).toBeFalsy();
  });

  it("should return false if matrix has repeated digit", () => {
    const matrix = [
      [2, 7, 6],
      [1, 5, 1],
      [4, 3, 8],
    ];

    expect(solve(matrix)).toBeFalsy();
  });
});
