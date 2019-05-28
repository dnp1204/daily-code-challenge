/**
 * Company: Yahoo.
 *
 * Write an algorithm that computes the reversal of a directed graph. For example, if a
 * graph consists of A -> B -> C, it should become A <- B <- C.
 *
 * GeeksForGeeks: https://www.geeksforgeeks.org/transpose-graph/
 */
const transposeGraph = function(graph) {
  const newGraph = new Graph();

  for (const key of Object.keys(graph.vertices)) {
    newGraph.addVertex(key);
  }

  for (const key of Object.keys(graph.vertices)) {
    const vertex = graph.vertices[key];
    const node1 = newGraph.vertices[vertex.val];
    for (const neighbor of vertex.neighbors) {
      const node2 = newGraph.vertices[neighbor.node.val];
      newGraph.addEdge(node2, node1, 0, true);
    }
  }

  return newGraph;
};

const { Graph } = require('../../libraries/Graph');

const graph = new Graph();

const nodeA = graph.addVertex('A');
const nodeB = graph.addVertex('B');
const nodeC = graph.addVertex('C');
const nodeD = graph.addVertex('D');
const nodeE = graph.addVertex('E');

graph.addEdge(nodeA, nodeB, 0, true);
graph.addEdge(nodeA, nodeD, 0, true);
graph.addEdge(nodeA, nodeE, 0, true);

graph.addEdge(nodeC, nodeA, 0, true);

graph.addEdge(nodeD, nodeC, 0, true);

graph.addEdge(nodeE, nodeB, 0, true);
graph.addEdge(nodeE, nodeD, 0, true);

console.log('Before:');
console.log(graph.toString());

const newGraph = transposeGraph(graph);

console.log('After:');
console.log(newGraph.toString());
