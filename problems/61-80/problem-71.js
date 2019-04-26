/**
 * Company: Google.
 *
 * On our special chessboard, two bishops attack each other if they share the same
 * diagonal. This includes bishops that have another bishop located between them,
 * i.e. bishops can attack through pieces.
 *
 * You are given N bishops, represented as (row, column) tuples on a M by M chessboard.
 * Write a function to count the number of pairs of bishops that attack each other.
 * The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).
 *
 * For example, given M = 5 and the list of bishops:
 * (0, 0)
 * (1, 2)
 * (2, 2)
 * (4, 0)
 *
 * The board would look like this:
 * [b 0 0 0 0]
 * [0 0 b 0 0]
 * [0 0 b 0 0]
 * [0 0 0 0 0]
 * [b 0 0 0 0]
 *
 * You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3
 * and 4
 */
const countAttack = function(M, bishops = []) {
  const table = initTable(M, bishops);
  let total = 0;
  for (const bishop of bishops) {
    const [r, c] = bishop;
    total =
      total +
      moveDownLeft(r, c, table) +
      moveDownRight(r, c, table) +
      moveTopLeft(r, c, table) +
      moveTopRight(r, c, table);
  }
  console.log(table);
  console.log(total);
  return total;
};

const moveDownLeft = function(r, c, table) {
  let attack = 0;
  while (++r <= table.length && --c >= 0 && table[r][c] !== 1) {
    if (table[r][c] === 'b') attack++;
    if (table[r][c] === 0) table[r][c] = 1;
  }
  return attack;
};

const moveDownRight = function(r, c, table) {
  let attack = 0;
  while (++r < table.length && ++c < table[0].length && table[r][c] !== 1) {
    if (table[r][c] === 'b') attack++;
    if (table[r][c] === 0) table[r][c] = 1;
  }
  return attack;
};

const moveTopLeft = function(r, c, table) {
  let attack = 0;
  while (--r > 0 && --c > 0 && table[r][c] !== 1) {
    if (table[r][c] === 'b') attack++;
    if (table[r][c] === 0) table[r][c] = 1;
  }
  return attack;
};

const moveTopRight = function(r, c, table) {
  let attack = 0;
  while (--r > 0 && ++c < table[0].length && table[r][c] !== 1) {
    if (table[r][c] === 'b') attack++;
    if (table[r][c] === 0) table[r][c] = 1;
  }
  return attack;
};

const initTable = function(M, bishops) {
  const table = [];
  for (let i = 0; i < M; i++) {
    table[i] = [];
    for (let j = 0; j < M; j++) {
      table[i][j] = 0;
    }
  }

  for (const bishop of bishops) {
    const [x, y] = bishop;
    table[x][y] = 'b';
  }

  return table;
};

countAttack(5, [[0, 0], [1, 2], [2, 2], [4, 0]]);
