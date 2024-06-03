import solve from './solve.js';

const magicSum = n => (n * (n * n + 1)) / 2;

function isValid(matrix, n) {
  const targetSum = magicSum(n);

  // Verificar linhas
  for (const row of matrix) {
    const rowSum = row.reduce((a, b) => a + b, 0);
    if ((!row.includes(0) && rowSum !== targetSum) || rowSum > targetSum) {
      return false;
    }
  }

  // Verificar colunas
  for (let col = 0; col < n; col++) {
    let colSum = 0;
    for (let row = 0; row < n; row++) {
      colSum += matrix[row][col];
    }
    if (
      (
        ![...Array(n).keys()].map(i => matrix[i][col]).includes(0)
        && colSum !== targetSum
      ) || colSum > targetSum
    ) {
      return false;
    }
  }

  // Verificar diagonais
  let diag1Sum = 0;
  let diag2Sum = 0;
  for (let i = 0; i < n; i++) {
    diag1Sum += matrix[i][i];
    diag2Sum += matrix[i][n - 1 - i];
  }

  if (
    (
      ![...Array(n).keys()].map(i => matrix[i][i]).includes(0)
      && diag1Sum !== targetSum
    ) || diag1Sum > targetSum
  ) {
    return false;
  }
  if (
    (
      ![...Array(n).keys()].map(i => matrix[i][n - 1 - i]).includes(0)
      && diag2Sum !== targetSum
    ) || diag2Sum > targetSum
  ) {
    return false;
  }

  return true;
}

function dfs(matrix, usedNumbers, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0) {
        continue;
      }

      for (let num = 1; num <= n * n; num++) {
        if (usedNumbers.has(num)) {
          continue;
        }

        matrix[i][j] = num;
        usedNumbers.add(num);
        if (isValid(matrix, n)) {
          dfs(matrix, usedNumbers, n);
        }

        if (!matrix.flat().includes(0) && solve(matrix)) {
          return;
        }
        matrix[i][j] = 0;
        usedNumbers.delete(num);
      }
    }
  }
}

export default dfs;
