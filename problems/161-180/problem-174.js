/**
 * Company: Apple.
 *
 * A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:
 * if n is even, the next number in the sequence is n / 2
 * if n is odd, the next number in the sequence is 3n + 1
 * It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.
 * Bonus: What input n <= 1000000 gives the longest sequence?
 *
 * Leetcode: https://leetcode.com/problems/integer-replacement/
 */
var integerReplacement = function(n) {
  let ans = 0;
  while (n !== 1) {
    if (n % 2 === 0) n /= 2;
    else if ((n + 1) % 4 === 0 && n !== 3) n++;
    else n--;
    ans++;
  }
  return ans;
};
