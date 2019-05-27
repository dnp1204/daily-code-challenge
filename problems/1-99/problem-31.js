/**
 * Company: Facebook.
 *
 * Given a multiset of integers, return whether it can be partitioned into
 * two subsets whose sums are the same.
 *
 * For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would
 * return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35},
 * which both add up to 55.
 *
 * Given the multiset {15, 5, 20, 10, 35}, it would return false, since we
 * can't split it up into two subsets that add up to the same sum.
 *
 * Leetcode: https://leetcode.com/problems/partition-equal-subset-sum/
 */
var canPartition = function(nums) {
  if (nums.length === 0) return true;
  let sum = nums.reduce((acc, num) => acc + num);
  if (sum % 2 !== 0) return false;

  const helper = function(nums, sum, memo = {}) {
    if (memo[nums.join('')] != undefined) return memo[nums.join('')];
    if (sum === 0) return true;
    for (let i = 0; i < nums.length; i++) {
      if (sum < nums[i]) return false;
      const newNums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
      const result = helper(newNums, sum - nums[i], memo);
      memo[nums.join('')] = result;
      if (result) return result;
    }
  };

  return helper(nums, sum / 2) || false;
};
