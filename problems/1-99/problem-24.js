/**
 * Company: Facebook.
 *
 * There is an N by M matrix of zeroes. Given N and M, write a function to count
 * the number of ways of starting at the top-left corner and getting to the
 * bottom-right corner. You can only move right or down.
 *
 * For example, given a 2 by 2 matrix, you should return 2, since there are two
 * ways to get to the bottom-right:
 * Right, then down
 * Down, then right
 * Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.
 *
 * Leetcode: https://leetcode.com/problems/unique-paths/
 */
var uniquePaths = function(m, n) {
  let total = 0;

  const dp = function() {
    if (m === 0 || n === 0) return 0;
    const table = [];

    for (let i = 0; i < m; i++) {
      table[i] = [];

      for (let j = 0; j < n; j++) {
        if (i === 0) {
          table[i][j] = 1;
        } else {
          table[i][j] = 0;
        }
      }
      table[i][0] = 1;
    }

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        table[i][j] = table[i - 1][j] + table[i][j - 1];
      }
    }

    return table[m - 1][n - 1];
  };

  const helper = function(i, j) {
    if (i > m - 1 || j > n - 1) return total;
    if (i === m - 1 && j === n - 1) {
      total += 1;
      return total;
    }

    helper(i, j + 1);
    helper(i + 1, j);

    return total;
  };

  return dp();
};
