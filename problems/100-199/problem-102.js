/**
 * Company: Amazon.
 *
 * Given a node in a binary search tree, return the next bigger element,
 * also known as the inorder successor.
 *
 * For example, the inorder successor of 22 is 30.
 *
 *     10
 *    /  \
 *   5    30
 *       /  \
 *     22    35
 * You can assume each node has a parent pointer.
 */
const inorderSuccessor = function(root, target) {
  const helper = function(node) {
    if (!node) return null;
    if (node.val === target.val) return node.right;
    if (root.left && root.left.val === target.val) return root;
    if (root.val > target.val) return helper(root.left);
    return helper(root.right);
  };

  return helper(root, target);
};
