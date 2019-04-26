/**
 * Company: Facebook.
 *
 * Given an N by N matrix, rotate it by 90 degrees clockwise.
 *
 * For example, given the following matrix:
 *
 * [[1, 2, 3],
 * [4, 5, 6],
 * [7, 8, 9]]
 *
 * you should return:
 *
 * [[7, 4, 1],
 * [8, 5, 2],
 * [9, 6, 3]]
 *
 * Follow-up: What if you couldn't use any extra space?
 * Leetcode: https://leetcode.com/problems/rotate-image/
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];

      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
};
