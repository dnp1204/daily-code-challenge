/**
 * Company: Facebook.
 *
 * Given a list of integers, return the largest product that can be made
 * by multiplying any three integers.
 *
 * For example, if the list is [-10, -10, 5, 2], we should return 500,
 * since that's -10 * -10 * 5.
 *
 * You can assume the list has at least three integers.
 *
 * Leetcode: https://leetcode.com/problems/maximum-product-of-three-numbers/
 */
var maximumProduct = function(nums) {
  let max1 = (max2 = max3 = Number.MIN_SAFE_INTEGER);
  let min1 = (min2 = Number.MAX_SAFE_INTEGER);

  for (const num of nums) {
    if (max1 < num) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (max2 < num) {
      max3 = max2;
      max2 = num;
    } else if (max3 < num) {
      max3 = num;
    }

    if (min1 > num) {
      min2 = min1;
      min1 = num;
    } else if (min2 > num) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
