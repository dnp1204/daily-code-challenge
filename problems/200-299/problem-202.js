/**
 * Company: Palantir.
 *
 * Write a program that checks whether an integer is a palindrome. For example,
 * 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert
 * the integer into a string.
 *
 * Leetcode: https://leetcode.com/problems/palindrome-number/
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  let revNum = 0;
  let num = x;

  while (num != 0) {
    revNum = revNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return x === revNum;
};
