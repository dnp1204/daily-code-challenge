/**
 * Company: Google.
 *
 * In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom
 * right are identical.
 *
 * Here is an example:
 *
 * 1 2 3 4 8
 * 5 1 2 3 4
 * 4 5 1 2 3
 * 7 4 5 1 2
 *
 * Write a program to determine whether a given input is a Toeplitz matrix.
 *
 * Leetcode: https://leetcode.com/problems/toeplitz-matrix/
 */
var isToeplitzMatrix = function(matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
    }
  }
  return true;
};
