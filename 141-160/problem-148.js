/**
 * Company: Amazon.
 *
 * Given n numbers, find the greatest common denominator between them.
 *
 * For example, given the numbers [42, 56, 14], return 14.
 */
const gcd = function(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) return a;
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
};

const findGCD = function(nums) {
  if (!nums.length) return -1;
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = gcd(result, nums[i]);
  }
  return result;
};

console.log(findGCD([1, 2, 3]));
console.log(findGCD([5, 5, 7]));
console.log(findGCD([3, 6, 10]));
console.log(findGCD([42, 56, 14]));
console.log(findGCD([2, 4, 6, 8]));
