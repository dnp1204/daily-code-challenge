/**
 * Company: Facebook.
 *
 * Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be
 * empty, and in this case the sum is 0.
 *
 * For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where
 * the 8 is obtained from wrapping around.
 *
 * Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.
 *
 * Leetcode: https://leetcode.com/problems/maximum-sum-circular-subarray/
 */
var maxSubarraySumCircular = function(A) {
  if (!A.length) return 0;
  let current = 0,
    max = -Infinity,
    minCurrent = 0,
    min = Infinity;
  const sum = A.reduce((acc, ele) => acc + ele);

  for (let i = 0; i < A.length; i++) {
    current = Math.max(current + A[i], A[i]);
    minCurrent = Math.min(minCurrent + A[i], A[i]);
    max = Math.max(max, current);
    min = Math.min(min, minCurrent);
  }

  if (max > 0) {
    max = Math.max(max, sum - min);
  }

  return max;
};
