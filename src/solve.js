const magicSum = n => (n * (n * n + 1)) / 2;

/**
 * @param {Array<Array<number>>} matrix
 * @return {boolean}
 */
export default function solve(matrix) {
  const len = matrix.length;

  const cols = Array(len).fill(0);
  const rows = Array(len).fill(0);
  const diagonals = Array(2).fill(0);
  const digits = new Set();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (matrix[i][j] === 0) {
        return false;
      }

      if (
        digits.has(matrix[i][j]) || matrix[i][j] < 0 || matrix[i][j] > len ** 2
      ) {
        return false;
      }
      cols[i] += matrix[i][j];
      rows[j] += matrix[j][i];

      if (i === j) {
        diagonals[0] += matrix[i][j];
      }
      if (i + j === len - 1) {
        diagonals[1] += matrix[i][j];
      }

      digits.add(matrix[i][j]);
    }
  }

  const tested = magicSum(len);
  for (let i = 0; i < len; i++) {
    if (cols[i] !== tested) {
      return false;
    }

    if (rows[i] !== tested) {
      return false;
    }

    if (diagonals[i] && diagonals[i] !== tested) {
      return false;
    }
  }

  return true;
}
