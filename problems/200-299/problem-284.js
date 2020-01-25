/**
 * Company: Yext.
 *
 * Two nodes in a binary tree can be called cousins if they are on the same level of the tree but have
 * different parents.
 *
 * Given a binary tree and a particular node, find all cousins of that node.
 *
 * Leetcode: https://leetcode.com/problems/cousins-in-binary-tree/
 */
var isCousins = function(root, x, y) {
  const findNode = function(node, parent, target, level) {
    if (!node) return null;
    if (node.val === target) return { level: level, parent: parent };
    return (
      findNode(node.left, node, target, level + 1) ||
      findNode(node.right, node, target, level + 1)
    );
  };

  const nodeX = findNode(root, null, x, 0);
  const nodeY = findNode(root, null, y, 0);

  return (
    nodeX !== null &&
    nodeY !== null &&
    nodeX.level === nodeY.level &&
    nodeX.parent !== null &&
    nodeY.parent !== null &&
    nodeX.parent.val !== nodeY.parent.val
  );
};
