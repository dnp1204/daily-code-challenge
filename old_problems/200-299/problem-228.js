/**
 * Company: Twitter.
 *
 * Given a list of numbers, create an algorithm that arranges them in order to form the largest possible
 * integer. For example, given [10, 7, 76, 415], you should return 77641510.
 *
 * Leetcode: https://leetcode.com/problems/largest-number/
 */
var largestNumber = function(nums) {
  if (!nums.length) return '0';

  nums.sort((a, b) => {
    const s1 = '' + a + b;
    const s2 = '' + b + a;
    return s2 - s1;
  });

  const result = nums.join('');

  return result[0] === '0' ? '0' : result;
};
