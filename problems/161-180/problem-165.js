/**
 * Company: Google.
 *
 * You are given an array of arrays of integers, where each array corresponds to a row
 * in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] represents the
 * triangle:
 *
 *   1
 *  2 3
 * 1 5 1
 *
 * We define a path in the triangle to start at the top and go down one row at a time to
 * an adjacent value, eventually ending with an entry on the bottom row. For example,
 * 1 -> 3 -> 5. The weight of the path is the sum of the entries.
 *
 * Write a program that returns the weight of the maximum weight path.
 *
 * Leetcode: https://leetcode.com/problems/triangle/
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (!triangle.length) return 0;

  const n = triangle.length - 1;
  const table = Array(triangle.length);

  for (let i = 0; i < triangle[n].length; i++) {
    table[i] = triangle[n][i];
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      table[j] = triangle[i][j] + Math.min(table[j], table[j + 1]);
    }
  }

  return table[0];
};
