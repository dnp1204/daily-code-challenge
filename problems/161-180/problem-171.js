/**
 * Company: Dropbox.
 *
 * Given an undirected graph G, check whether it is bipartite. Recall that a graph is
 * bipartite if its vertices can be divided into two independent sets, U and V, such
 * that no edge connects vertices of the same set.
 *
 * Leetcode: https://leetcode.com/problems/is-graph-bipartite/
 */
var isBipartite = function(graph) {
  const n = graph.length;
  const BLUE = 0,
    YELLOW = 1;
  const colors = Array(n).fill(-1);

  const dfs = function(index, color) {
    if (colors[index] !== -1) return colors[index] !== color;
    color === BLUE ? (colors[index] = YELLOW) : (colors[index] = BLUE);
    const indexes = graph[index];
    for (const i of indexes) {
      if (!dfs(i, colors[index])) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    const indexes = graph[i];
    if (colors[i] === -1) {
      colors[i] = BLUE;
    }
    for (const index of indexes) {
      if (!dfs(index, colors[i])) return false;
    }
  }

  return true;
};
