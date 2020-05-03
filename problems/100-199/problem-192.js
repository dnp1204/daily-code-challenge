/**
 * Company: Google.
 *
 * You are given an array of nonnegative integers. Let's say you start at the beginning of the array and
 * are trying to advance to the end. You can advance at most, the number of steps that you're currently
 * on. Determine whether you can get to the end of the array.
 *
 * For example, given the array [1, 3, 1, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return
 * true.
 *
 * Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.
 *
 * Leetcode: https://leetcode.com/problems/jump-game/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (!nums.length || nums.length === 1) return true;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, nums[i] + i);
  }
  return max >= nums.length - 1;
};

function method1(nums) {
  if (!nums.length || nums.length === 1) return true;
  const table = Array(nums.length).fill(-1);
  table[0] = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (table[i] !== -1 && nums[i] + i >= nums.length - 1) return true;
    for (let j = 1; table[i] !== -1 && j <= nums[i]; j++) {
      table[i + j] = i;
    }
  }
  return false;
}
