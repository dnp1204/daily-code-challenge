/**
 * Company: MongoDB.
 *
 * Given a list of elements, find the majority element, which appears more than
 * half the time (> floor(len(lst) / 2.0)).
 *
 * You can assume that such element exists.
 * For example, given [1, 2, 1, 1, 3, 4, 0], return 1.
 *
 * Leetcode: https://leetcode.com/problems/majority-element/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = 0,
    count = 0;

  nums.forEach(num => {
    if (count === 0) result = num;
    if (result !== num) count -= 1;
    else count++;
  });

  return result;
};
