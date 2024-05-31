/**
 * @param {any} rl
 * @param {Array<Array<number>>} matrix
 * @return {void}
 */
export default function (rl, matrix) {
  const len = matrix.length;
  let p = ' ';
  for (let x = 0; x < len * len; x++) {
    p += '-';
  }
  p += ' \n';

  for (let i = 0; i < len; i++) {
    p += '|';
    for (let j = 0; j < len; j++) {
      p += ` ${matrix[i][j]} `;
    }
    p += '|\n';
  }

  p += ' ';
  for (let y = 0; y < len * len; y++) {
    p += '-';
  }
  p += ' \n';

  rl.write(p);
}
