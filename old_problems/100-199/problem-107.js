/**
 * Company: Facebook.
 *
 * Given an array of integers in which two elements appear exactly once and
 * all other elements appear exactly twice, find the two elements that appear
 * only once.
 *
 * For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8.
 * The order does not matter.
 *
 * Follow-up: Can you do this in linear time and constant space?
 *
 * Leetcode: https://leetcode.com/problems/single-number-iii/
 */
var singleNumber = function(nums) {
  // Pass 1 :
  // Get the XOR of the two numbers we need to find
  let diff = 0;
  for (const num of nums) {
    diff ^= num;
  }
  // Get its last set bit
  diff &= -diff;

  // Pass 2 :
  // this array stores the two numbers we will return
  const rets = [0, 0];
  for (const num of nums) {
    if ((num & diff) == 0) {
      // the bit is not set
      rets[0] ^= num;
    } // the bit is set
    else {
      rets[1] ^= num;
    }
  }
  return rets;
};
