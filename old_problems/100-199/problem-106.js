/**
 * Company: Google.
 *
 * Find the minimum number of coins required to make n cents.
 * You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
 * For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢,
 * and a 1¢.
 *
 * Leetcode: https://leetcode.com/problems/coin-change/
 * Youtube: https://www.youtube.com/watch?v=jgiZlGzXMBw
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0;
  const memo = Array(amount + 1).fill(amount + 1);
  memo[0] = 0;

  for (let i = 1; i < memo.length; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        memo[i] = Math.min(memo[i], memo[i - coin] + 1);
      }
    }
  }

  return memo[memo.length - 1] === amount + 1 ? -1 : memo[memo.length - 1];
};
