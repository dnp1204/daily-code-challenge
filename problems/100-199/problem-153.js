/**
 * Company: Google.
 *
 * Given an array of elements, return the length of the longest subarray where all its elements
 * are distinct.
 *
 * For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of
 * distinct elements is [5, 2, 3, 4, 1].
 */
const findLongestDistinct = function(nums) {
  let visited = {};
  let start = 0,
    current = 0,
    max = 0;

  while (current < nums.length) {
    visited = {};
    while (!visited[nums[current]] && current < nums.length) {
      visited[nums[current]] = true;
      current++;
    }
    max = Math.max(max, current - start);
    start = current;
  }

  return max;
};

console.log(findLongestDistinct([5, 1, 3, 5, 2, 3, 4, 1]));
console.log(findLongestDistinct([1, 2, 3, 4, 2, 3]));
console.log(findLongestDistinct([1, 1, 1, 1, 1, 1]));
