/**
 * Company: Google.
 *
 * You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}.
 * By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.
 *
 * Leetcode: https://leetcode.com/problems/find-the-duplicate-number/
 * Youtube: https://www.youtube.com/watch?v=-YiQZi3mLq0
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  if (!nums.length) return -1;
  let slow = nums[0],
    fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = 0;

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
