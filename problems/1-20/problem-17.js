/**
 * Company: Facebook.
 *
 * Given a array of numbers representing the stock prices of a company in
 * chronological order, write a function that calculates the maximum profit
 * you could have made from buying and selling that stock once. You must buy
 * before you can sell it.
 *
 * For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could
 * buy the stock at 5 dollars and sell it at 10 dollars.
 *
 * Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let maxStart = (maxEnd = currentStart = 0);
  let max = prices[maxEnd] - prices[maxStart];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - prices[currentStart] < 0) {
      currentStart = i;
    } else if (prices[i] - prices[currentStart] > max) {
      max = prices[i] - prices[currentStart];
      maxStart = currentStart;
      maxEnd = i;
    }
  }

  return { max, maxStart, maxEnd };
};
