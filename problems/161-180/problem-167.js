/**
 * Company: Uber.
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to
 * you beforehand. Find the minimum element in O(log N) time. You may assume the
 * array does not contain duplicates.
 *
 * For example, given [5, 7, 10, 3, 4], return 3.
 *
 * Leetcode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0;
  let end = nums.length;
  if (end === 1 || nums[start] < nums[end - 1]) return nums[0];

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] < nums[0]) {
      if (
        (nums[middle] < nums[middle - 1] || middle - 1 < 0) &&
        (nums[middle] <= nums[middle + 1] || middle + 1 >= nums.length)
      ) {
        return nums[middle];
      }
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};
