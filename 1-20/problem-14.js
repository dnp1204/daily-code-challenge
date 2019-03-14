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
  const table = [];

  let min = Number.MAX_SAFE_INTEGER;
  let minPath = [];

  for (let i = 0; i < numHouses; i++) {
    table[i] = [];

    for (let j = 0; j < numColors; j++) {
      table[i][j] = Number.MAX_SAFE_INTEGER;
    }
  }

  const helper = function(atHouse, cost, previousColor, path = [], memo) {
    if (atHouse === numHouses) {
      min = Math.min(min, cost);
      minPath = min === cost ? path : minPath;
      return cost;
    }

    if (
      memo[atHouse][previousColor] &&
      memo[atHouse][previousColor] !== Number.MAX_SAFE_INTEGER &&
      memo[atHouse][previousColor] < cost
    ) {
      return memo[atHouse][previousColor];
    }

    for (let i = 0; i < numColors; i++) {
      if (previousColor !== i) {
        const result = helper(
          atHouse + 1,
          cost + costs[atHouse][i],
          i,
          [...path, i],
          memo
        );
        memo[atHouse][i] = result;
      }
    }

    return cost;
  };

  helper(0, 0, -1, [], table);
  return min;
}

console.log(
  findMinCosts([[4, 0, 3], [8, 3, 8], [4, 5, 0], [3, 4, 4], [8, 8, 0]])
);
console.log(findMinCosts([[14, 2, 11], [11, 14, 5], [14, 3, 10]]));
