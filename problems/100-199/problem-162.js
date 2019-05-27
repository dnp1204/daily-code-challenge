/**
 * Company: Google.
 *
 * Given a set of distinct positive integers, find the largest subset such that every pair
 * of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.
 *
 * For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given
 * [1, 3, 6, 24], return [1, 3, 6, 24].
 *
 * Leetcode: https://leetcode.com/problems/largest-divisible-subset/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const memo = Array(nums.length).fill(1);
  const ans = [];
  let max = 1;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
        max = Math.max(memo[i], max);
      }
    }
  }

  for (let i = memo.length - 1; i >= 0; i--) {
    if (!ans.length) {
      if (memo[i] === max) {
        ans.push(nums[i]);
        max--;
      }
    } else if (memo[i] === max) {
      if (ans[ans.length - 1] % nums[i] === 0) {
        ans.push(nums[i]);
        max--;
      }
    }
  }

  return ans;
};
