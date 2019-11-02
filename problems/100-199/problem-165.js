/**
 * Company: Google.
 *
 * Given an array of integers and a number k, where 1 <= k <= length of
 * the array, compute the maximum values of each subarray of length k.
 *
 * For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should
 * get: [10, 7, 8, 8], since:
 * 10 = max(10, 5, 2)
 * 7 = max(5, 2, 7)
 * 8 = max(2, 7, 8)
 * 8 = max(7, 8, 7)
 *
 * Do this in O(n) time and O(k) space. You can modify the input array
 * in-place and you do not need to store the results. You can simply
 * print them out as you compute them.
 *
 * Leetcode: https://leetcode.com/problems/sliding-window-maximum/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!nums.length || k <= 0) return [];
  if (k === 1) return nums;

  const queue = [];
  const n = nums.length;
  const r = Array(n - k + 1);
  let ri = 0;

  for (let i = 0; i < nums.length; i++) {
    // remove numbers out of range k
    while (queue.length && queue[0] < i - k + 1) {
      queue.shift();
    }

    // remove smaller numbers in k range as they are useless
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }

    // q contains index... r contains content
    queue.push(i);
    if (i >= k - 1) {
      r[ri++] = nums[queue[0]];
    }
  }

  return r;
};
