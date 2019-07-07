/**
 * Company: Morgan Stanley.
 *
 * In Ancient Greece, it was common to write text with the first line going left to right,
 * the second line going right to left, and continuing to go back and forth. This style was
 * called "boustrophedon".
 *
 * Given a binary tree, write an algorithm to print the nodes in boustrophedon order.
 *
 * Leetcode: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const result = [];
  let queue = [root];
  let even = false;

  while (queue.length) {
    const nextLevel = [];
    const level = [];

    while (queue.length) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    if (even) {
      level.reverse();
      result.push(level);
    } else {
      result.push(level);
    }
    queue = nextLevel;
    even = !even;
  }

  return result;
};
