/**
 * Company: Google.
 *
 * Invert a binary tree.
 *
 * For example, given the following tree:
 *
 *     a
 *    / \
 *   b   c
 *  / \  /
 * d  e f
 * should become:
 *
 *     a
 *    / \
 *   c  b
 *  /  / \
 * f  e  d
 */
var invertTree = function(root) {
  return helper(root);
};

var helper = function(root) {
  if (!root) return root;
  const temp = root.left;
  root.left = helper(root.right);
  root.right = helper(temp);
  return root;
};
