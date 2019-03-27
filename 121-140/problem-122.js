/**
 * Company:  Facebook.
 *
 * Given a positive integer n, find the smallest number of squared integers
 * which sum to n.
 *
 * For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4.
 *
 * Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.
 *
 * Leetcode: https://leetcode.com/problems/perfect-squares/
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const nums = [];
  let result = [];

  for (let i = 1; i * i <= n; i++) {
    nums.push(i * i);
  }

  const helper = function(n, nums, current = []) {
    if (n === 0) {
      if (!result.length || result.length > current.length) result = current;
      return result;
    }

    for (const num of nums) {
      if (n >= num) helper(n - num, nums, [...current, num]);
    }

    return result;
  };

  const dpHelper = function(n, nums) {
    const memo = Array(n + 1).fill(n + 1);
    memo[0] = 0;
    for (let i = 1; i < memo.length; i++) {
      for (const num of nums) {
        if (i >= num) {
          memo[i] = Math.min(memo[i - num] + 1, memo[i]);
        }
      }
    }
    return memo[n];
  };

  return dpHelper(n, nums);
};
