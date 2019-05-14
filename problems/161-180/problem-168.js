/**
 * Company: Amazon.
 *
 * Given a complete binary tree, count the number of nodes in faster than O(n) time.
 * Recall that a complete binary tree has every level filled except the last, and
 * the nodes in the last level are filled starting from the left.
 *
 * Leetcode: https://leetcode.com/problems/count-complete-tree-nodes/
 */
var countNodes = function(root) {
  if (!root) return 0;

  const leftLevel = findLeftLevel(root);
  const rightLevel = findRightLevel(root);

  if (leftLevel === rightLevel) {
    return Math.pow(2, leftLevel) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

function findLeftLevel(node) {
  if (!node) return 0;
  return 1 + findLeftLevel(node.left);
}

function findRightLevel(node) {
  if (!node) return 0;
  return 1 + findRightLevel(node.right);
}
