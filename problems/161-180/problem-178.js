/**
 * Company: Stripe.
 *
 * Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.
 *
 * For example, given 156, you should return 3.
 */
var findMaxConsecutiveOnes = function(nums) {
  let ans = 0;
  while (nums > 0) {
    nums &= nums << 1;
    ans += 1;
  }
  return ans;
};

console.log(findMaxConsecutiveOnes(156));
