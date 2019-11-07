/**
 * Company: Pandora.
 *
 * Given an undirected graph, determine if it contains a cycle.
 */
const isCyclic = function(graph) {
  const dfs = function(vertex, parent, visited) {
    visited[vertex] = true;
    for (const key of graph[vertex]) {
      if (key === parent) continue;
      if (visited[key] || dfs(key, vertex, visited)) return true;
    }
    return false;
  };

  const visited = {};
  for (const key of Object.keys(graph)) {
    if (visited[key]) continue;
    if (dfs(key, null, visited)) return true;
  }

  return false;
};

let graph = {
  '0': ['1', '2', '3'],
  '1': ['0', '2'],
  '2': ['0', '1'],
  '3': ['0', '4'],
  '4': ['3']
};
console.log(isCyclic(graph));

graph = {
  '0': ['1', '3'],
  '1': ['0', '2'],
  '2': ['1'],
  '3': ['0', '4'],
  '4': ['3']
};
console.log(isCyclic(graph));
