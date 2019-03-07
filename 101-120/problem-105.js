/**
 * Company: Google.
 *
 * Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle
 * containing only 1's and return its area.
 *
 * For example, given the following matrix:
 * [[1, 0, 0, 0],
 * [1, 0, 1, 1],
 * [1, 0, 1, 1],
 * [0, 1, 0, 0]]
 * Return 4.
 *
 * Leetcode: https://leetcode.com/problems/maximal-rectangle/
 * Youtube: https://www.youtube.com/watch?v=g8bSdXCG-lA
 */
function maximalRectangle(matrix) {
  if (
    matrix == null ||
    matrix.length == 0 ||
    matrix[0] == null ||
    matrix[0].length == 0
  ) {
    return 0;
  }
  const heights = Array(matrix[0].length).fill(0);
  let ans = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') heights[j] = 0;
      else heights[j]++;
    }
    ans = Math.max(ans, calcArea(heights));
  }
  return ans;
}

function calcArea(heights) {
  if (!heights || heights.length === 0) return 0;
  let ans = 0;
  let stack = [];
  stack.push(-1);

  for (let i = 0; i <= heights.length; i++) {
    while (
      stack[stack.length - 1] !== -1 &&
      (i == heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      let index = stack.pop();
      let start = stack[stack.length - 1] + 1;
      ans = Math.max(ans, heights[index] * (i - start));
    }
    stack.push(i);
  }
  return ans;
}
