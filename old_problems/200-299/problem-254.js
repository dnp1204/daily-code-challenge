/**
 * Company: Yahoo.
 *
 * Recall that a full binary tree is one in which each node is either a leaf node, or
 * has two children. Given a binary tree, convert it to a full one by removing nodes
 * with only one child.
 */
const removeHalfNode = function(root) {
  const helper = function(node) {
    if ((!node.left && !node.right) || !node) return node;
    const left = removeHalfNode(node.left);
    const right = removeHalfNode(node.right);

    if (!left) return right;
    if (!right) return left;

    return node;
  };

  return helper(root);
};
