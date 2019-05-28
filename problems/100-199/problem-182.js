/**
 * Company: Yahoo.
 *
 * Write an algorithm that computes the reversal of a directed graph. For example, if a
 * graph consists of A -> B -> C, it should become A <- B <- C.
 *
 * GeeksForGeeks: https://www.geeksforgeeks.org/transpose-graph/
 */
// TODO:
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

console.log(graph.toString());
