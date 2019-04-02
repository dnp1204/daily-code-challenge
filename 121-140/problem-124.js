/**
 * Company: Slack.
 *
 * You are given an N by M matrix of 0s and 1s. Starting from the top left corner,
 * how many ways are there to reach the bottom right corner?
 *
 * You can only move right and down. 0 represents an empty space while 1 represents
 * a wall you cannot walk through.
 *
 * For example, given the following matrix:
 *
 * [[0, 0, 1],
 * [0, 0, 1],
 * [1, 0, 0]]
 *
 * Return two, as there are only two ways to get to the bottom right:
 *
 * Right, down, down, right
 * Down, right, down, right
 *
 * The top left corner and bottom right corner will always be 0.
 *
 * Leetcode: https://leetcode.com/problems/unique-paths-ii/
 */
const findWays = function(matrix) {
  let total = 0;

  const dpHelper = function(matrix) {
    const table = [];
    for (let i = 0; i < matrix.length; i++) {
      table[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        table[i][j] = 0;
      }
    }

    for (let i = 0; i < matrix.length && matrix[i][0] !== 1; i++) {
      table[i][0] = 1;
    }

    for (let j = 0; j < matrix[0].length && matrix[0][j] !== 1; j++) {
      table[0][j] = 1;
    }

    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][j] !== 1) {
          table[i][j] = table[i - 1][j] + table[i][j - 1];
        }
      }
    }

    return table[matrix.length - 1][matrix[0].length - 1];
  };

  const recursiveHelper = function(matrix, row = 0, col = 0) {
    if (
      row >= matrix.length ||
      col >= matrix[0].length ||
      matrix[row][col] === 1
    )
      return total;
    if (row === matrix.length - 1 && col === matrix[0].length - 1)
      return (total += 1);

    recursiveHelper(matrix, row + 1, col);
    recursiveHelper(matrix, row, col + 1);

    return total;
  };

  return dpHelper(matrix);
};

console.log(findWays([[0, 0, 1], [0, 0, 1], [1, 0, 0]]));
console.log(findWays([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(findWays([[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 0, 0]]));
