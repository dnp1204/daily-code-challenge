/**
 * Company: Microsoft.
 *
 * Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer
 * and each internal node is one of '+', '−', '∗', or '/'.
 *
 * Given the root to such a tree, write a function to evaluate it.
 *
 * For example, given the following tree:
 *      *
 *     / \
 *   +    +
 *  / \  / \
 * 3  2  4  5
 * You should return 45, as it is (3 + 2) * (4 + 5).
 */
function evaluate(root) {
  const helper = function(root) {
    if (!root.left && !root.right) return parseInt(root.val);
    const left = helper(root.left);
    const operation = root.val;
    const right = helper(root.right);
    switch (operation) {
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '-':
        return left - right;
      case '+':
      default:
        return left + right;
    }
  };

  return helper(root);
}
