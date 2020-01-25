/**
 * Company: WhatsApp.
 *
 * Given an array of integers out of order, determine the bounds of the smallest window that must
 * be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you
 * should return (1, 3).
 *
 * Leetcode: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */
var findUnsortedSubarray = function(nums) {
  const n = nums.length;
  let start = -1;
  let end = -1;

  let currentMax = nums[0];
  for (let i = 0; i < n; i++) {
    if (currentMax > nums[i]) end = i;
    currentMax = Math.max(currentMax, nums[i]);
  }

  let currentMin = nums[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (currentMin < nums[i]) start = i;
    currentMin = Math.min(currentMin, nums[i]);
  }

  if (start === -1 || end === -1) return 0;

  return end - start + 1;
};

const solution1 = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = nums.length;

  let start = n - 1,
    end = 0;
  for (let i = 0; i < n; i++) {
    if (sorted[i] !== nums[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return start >= 0 && end > start ? end - start + 1 : 0;
};
