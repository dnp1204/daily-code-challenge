/**
 * Company: Facebook.
 *
 * A builder is looking to build a row of N houses that can be of
 * K different colors. He has a goal of minimizing cost while ensuring
 * that no two neighboring houses are of the same color.
 *
 * Given an N by K matrix where the nth row and kth column represents
 * the cost to build the nth house with kth color, return the minimum
 * cost which achieves this goal.
 *
 * Leetcode: https://leetcode.com/problems/paint-house/
 */
function findMinCosts(costs) {
  if (!costs || !costs.length) return null;

  const numHouses = costs.length;
  const numColors = costs[0].length;
}

const costs = [[4, 0, 3], [8, 3, 8], [4, 5, 0], [3, 4, 4], [8, 8, 0]];
console.log(findMinCosts(costs));
