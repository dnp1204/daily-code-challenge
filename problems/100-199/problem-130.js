/**
 * Company: Facebook.
 *
 * Given an array of numbers representing the stock prices of a company in
 * chronological order and an integer k, return the maximum profit you can
 * make from k buys and sells. You must buy the stock before you can sell
 * it, and you must sell the stock before you can buy it again.
 *
 * For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.
 *
 * Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 * Youtube: https://www.youtube.com/watch?v=oDhu5uGq_ic
 */
var maxProfit = function(k, prices) {
  const table = [];
  if (k >= prices.length / 2) return quickSolve(prices);

  for (let i = 0; i <= k; i++) {
    table[i] = [];
    for (let j = 0; j < prices.length; j++) {
      table[i][j] = 0;
    }
  }

  for (let i = 1; i <= k; i++) {
    let maxDiff = -prices[0];
    for (let j = 1; j < prices.length; j++) {
      table[i][j] = Math.max(table[i][j - 1], prices[j] + maxDiff);
      maxDiff = Math.max(table[i - 1][j - 1] - prices[j], maxDiff);
    }
  }

  return table[k][prices.length - 1];
};

function quickSolve(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
}
