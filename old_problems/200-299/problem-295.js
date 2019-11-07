/**
 * Company: Stitch Fix.
 *
 * Pascal's triangle is a triangular array of integers constructed with the following formula:
 *
 * The first row consists of the number 1.
 * For each subsequent row, each element is the sum of the numbers directly above it, on either
 * side.
 *
 * Given an input k, return the kth row of Pascal's triangle.
 *
 * Bonus: Can you do this using only O(k) space?
 *
 * Leetcode: https://leetcode.com/problems/pascals-triangle-ii/
 */
var getRow = function(rowIndex) {
  let result = Array(rowIndex + 1).fill(0);
  result[0] = 1;

  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j >= 1; j--) {
      result[j] += result[j - 1];
    }
  }

  return result;
};
