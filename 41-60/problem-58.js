/**
 * Company: Google.
 *
 * Given pre-order and in-order traversals of a binary tree, write a function
 * to reconstruct the tree.
 *
 * For example, given the following preorder traversal:
 * [a, b, d, e, c, f, g]
 *
 * And the following inorder traversal:
 * [d, b, e, a, f, c, g]
 *
 * You should return the following tree:
 *     a
 *    / \
 *   b   c
 *  / \ / \
 * d  e f  g
 */
var buildTree = function(preorder, inorder) {
  const helper = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    if (inorder.length === 1) return new TreeNode(inorder[0]);

    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    const indexOfRoot = inorder.indexOf(rootValue);

    if (indexOfRoot !== -1) {
      const leftInorder = inorder.slice(0, indexOfRoot);
      const rightInorder = inorder.slice(indexOfRoot + 1, inorder.length);
      const leftPreorder = preorder.slice(1, leftInorder.length + 1);
      const rightPreorder = preorder.slice(
        leftInorder.length + 1,
        preorder.length
      );

      root.left = helper(leftPreorder, leftInorder);
      root.right = helper(rightPreorder, rightInorder);
    }
    return root;
  };

  return helper(preorder, inorder);
};
