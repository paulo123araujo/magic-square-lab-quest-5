import readline from 'node:readline';
import process from 'node:process';
import solve from './solve.js';
import draw from './draw.js';

/**
 * @return {Promise<void>}
 */
export default async function () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = function (q) {
    return new Promise((res, _rej) =>
      rl.question(q, (ans) => {
        res(ans);
      }),
    );
  };

  const size = Number.parseInt(
    await question('Qual o tamanho do quadrado que quer tentar?\n'),
  );

  const matrix = [];

  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = 0;
    }
  }

  while (true) {
    const line = await question(
      'Qual o valor que quer colocar? Digite a linha, a coluna e o valor separados com espaço\n',
    );
    const [row, col, val] = line.split(' ').map(Number);

    matrix[row][col] = val;

    draw(rl, matrix);

    if (solve(matrix)) {
      rl.write('Parabéns, você resolveu o quadrado mágico!\n');
      rl.close();
      break;
    }
    else {
      rl.write('Ainda não esta completo, continue tentando!\n');
    }
  }
}
