/**
 * Company: Uber.
 *
 * Given a tree where each edge has a weight, compute the length of the longest
 * path in the tree.
 *
 * For example, given the following tree:
 *   a
 *  /|\
 * b c d
 *    / \
 *   e  f
 *  / \
 * g  h
 * and the weights: a-b: 3, a-c: 5, a-d: 8, d-e: 2, d-f: 4, e-g: 1, e-h: 1, the longest
 * path would be c -> a -> d -> f, with a length of 17.
 *
 * The path does not have to pass through the root, and each node can have any amount
 * of children.
 */
class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.edges = [];
  }

  addChild(node, weight) {
    this.edges.push(new Edge(node, weight));
    node.edges.push(new Edge(this, weight));
  }
}

const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');
const nodeG = new Node('g');
const nodeH = new Node('h');

root.addChild(nodeB, 3);
root.addChild(nodeC, 5);
root.addChild(nodeD, 8);

nodeD.addChild(nodeE, 2);
nodeD.addChild(nodeF, 4);

nodeE.addChild(nodeG, 1);
nodeE.addChild(nodeH, 1);

const getLongestPath = function(root) {
  let maxWeight = 0;
  let maxPath = '';
  let endNode = null;
  let visited = {};

  const dfs = function(node, currentPath = '', currentWeight = 0) {
    if (node.edges.length <= 1 && visited[node.val]) {
      if (currentWeight > maxWeight) {
        maxPath = currentPath + node.val;
        maxWeight = currentWeight;
        endNode = node;
      }
      return { maxPath, maxWeight, endNode };
    }

    for (const edge of node.edges) {
      if (!visited[edge.node.val]) {
        visited[edge.node.val] = true;
        dfs(
          edge.node,
          currentPath + node.val + '->',
          currentWeight + edge.weight
        );
      }
    }

    return { maxPath, maxWeight, endNode };
  };

  dfs(root);
  visited = {};
  dfs(endNode);

  return { maxPath, maxWeight };
};

console.log(getLongestPath(root));
