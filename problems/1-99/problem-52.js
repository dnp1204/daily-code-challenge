/**
 * Company: Google.
 *
 * Given the root of a binary tree, return a deepest node. For example,
 * in the following tree, return d.
 *
 *     a
 *    / \
 *   b   c
 *  /
 * d
 */
var deepestNode = function(root) {
  if (!root) return null;
  const queue = [root];
  let result = root;

  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    result = node;
  }

  return result;
};
