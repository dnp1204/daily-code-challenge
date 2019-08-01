/**
 * Company: Google.
 *
 * A regular number in mathematics is defined as one which evenly divides some power of 60. Equivalently,
 * we can say that a regular number is one whose only prime divisors are 2, 3, and 5.
 *
 * These numbers have had many applications, from helping ancient Babylonians keep time to tuning instruments
 * according to the diatonic scale.
 *
 * Given an integer N, write a program that returns, in order, the first N regular numbers.
 *
 * Leetcode: https://leetcode.com/problems/ugly-number-ii/
 */
var nthUglyNumber = function(n) {
  const ans = [];

  let factor2 = 1,
    factor3 = 1,
    factor5 = 1;
  let index1 = 0,
    index3 = 0,
    index5 = 0;

  for (let i = 1; i <= n; i++) {
    const min = Math.min(factor2, Math.min(factor3, factor5));
    ans.push(min);

    if (factor2 === min) factor2 = 2 * ans[index1++];
    if (factor3 === min) factor3 = 3 * ans[index3++];
    if (factor5 === min) factor5 = 5 * ans[index5++];
  }

  return ans;
};
