/**
 * Company: Facebook.
 *
 * Given an array of integers, write a function to determine whether the array
 * could become non-decreasing by modifying at most 1 element.
 *
 * For example, given the array [10, 5, 7], you should return true, since we can
 * modify the 10 into a 1 to make the array non-decreasing.
 *
 * Given the array [10, 5, 1], you should return false, since we can't modify any
 * one element to get a non-decreasing array.
 *
 * Leetcode: https://leetcode.com/problems/non-decreasing-array/
 */
var checkPossibility = function(nums) {
  if (nums.length === 0) return true;
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (count++ > 0) return false;
      const isRightLessThanLeft = i > 0 && nums[i + 1] < nums[i - 1];
      const isGreaterThanNextRight =
        i < nums.length - 2 && nums[i] > nums[i + 2];

      if (isRightLessThanLeft && isGreaterThanNextRight) return false;
    }
  }

  return true;
};
