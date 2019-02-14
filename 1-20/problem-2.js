/**
 * Company: Amazon
 *
 * An sorted array of integers was rotated an unknown number of times.
 * Given such an array, find the index of the element in the array in
 * faster than linear time. If the element doesn't exist in the array,
 * return null.
 *
 * For example, given the array [13, 18, 25, 2, 8, 10] and the element 8,
 * return 4 (the index of 8 in the array).
 *
 * You can assume all the integers in the array are unique.
 */
var search = function(nums, target) {
  let start = 0,
    end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    let num = target < nums[0] ? -Infinity : Infinity;

    if (nums[mid] < nums[0] == target < nums[0]) {
      num = nums[mid];
    }

    if (num < target) {
      start = mid + 1;
    } else if (num > target) {
      end = mid;
    } else {
      return mid;
    }
  }

  return -1;
};
