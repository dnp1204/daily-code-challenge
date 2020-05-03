/**
 * Company: Affirm.
 *
 * Given a array of numbers representing the stock prices of a company in chronological order,
 * write a function that calculates the maximum profit you could have made from buying and
 * selling that stock. You're also given a number fee that represents a transaction fee for
 * each buy and sell transaction.
 *
 * You must buy before you can sell the stock, but you can make as many transactions as you
 * like.
 *
 * For example, given [1, 3, 2, 8, 4, 10] and fee = 2, you should return 9, since you could
 * buy the stock at 1 dollar, and sell at 8 dollars, and then buy it at 4 dollars and sell
 * it at 10 dollars. Since we did two transactions, there is a 4 dollar fee, so we have
 * 7 + 6 = 13 profit minus 4 dollars of fees.
 */
const buyStocks = function(prices, fee) {
  const k = Math.floor(prices.length / 2);
  const table = [];

  for (let i = 0; i <= k; i++) {
    table[i] = [];
    for (let j = 0; j < prices.length; j++) {
      table[i][j] = 0;
    }
  }

  for (let i = 1; i <= k; i++) {
    let maxDiff = -prices[0];
    for (let j = 1; j < prices.length; j++) {
      table[i][j] = Math.max(table[i][j - 1], prices[j] + maxDiff - fee);
      maxDiff = Math.max(table[i - 1][j - 1] - prices[j], maxDiff);
    }
  }

  return table[k][prices.length - 1];
};

console.log(buyStocks([1, 3, 2, 8, 4, 10], 2));
