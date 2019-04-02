/**
 * Company: Zillow.
 *
 * You are given a 2-d matrix where each cell represents number of coins in that cell.
 * Assuming we start at matrix[0][0], and can only move right or down, find the maximum
 * number of coins you can collect by the bottom right corner.
 *
 * For example, in this matrix
 * 0 3 1 1
 * 2 0 0 4
 * 1 5 3 1
 * The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.
 */
const collectCoin = function(coinsTable) {
  const numRows = coinsTable.length;
  const numCols = coinsTable[0].length;

  const helper = function(coinsTable, i, j, path) {
    if (i > numRows - 1 || j > numCols - 1) return 0;
    if (i === numRows - 1 && j === numCols - 1) return coinsTable[i][j];

    const numCoinsRight = helper(coinsTable, i, j + 1);
    const numCoinsLeft = helper(coinsTable, i + 1, j);

    if (numCoinsRight > numCoinsLeft) {
      path.push;
    }

    return coinsTable[i][j] + Math.max(numCoinsRight, numCoinsLeft);
  };

  return helper(coinsTable, 0, 0);
};

const coins = [[0, 3, 1, 1], [2, 0, 0, 4], [1, 5, 3, 1]];
const coins2 = [
  [0, 2, 4, 1],
  [4, 8, 3, 7],
  [2, 3, 6, 2],
  [9, 7, 8, 3],
  [1, 5, 9, 4]
];
console.log(collectCoin(coins));
