/**
 * Company: Google.
 *
 * Given the root of a binary search tree, and a target K, return two
 * nodes in the tree whose sum equals K.
 *
 * For example, given the following tree and K of 20
 *
 *      10
 *    /   \
 *   5    15
 *       /  \
 *     11    15
 * Return the nodes 5 and 15.
 */
var findTarget = function(root, k) {
  if (!root) return false;
  const result = {};
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (result[node.val]) {
      console.log(result[node.val], node);
      return true;
    }
    const val = k - node.val;
    result[val] = node;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return false;
};
