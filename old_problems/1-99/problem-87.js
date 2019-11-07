/**
 * Company: Twitter.
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the
 * tree. Assume that each node in the tree also has a pointer to its parent.
 */
var lowestCommonAncestor = function(root, p, q) {
  const pathToP = findPath(root, p);
  const pathToQ = findPath(root, q);
  let node1 = null,
    node2 = null;

  while (pathToP.length && pathToQ.length) {
    if (pathToP.length > pathToQ.length) {
      node1 = pathToP.pop();
      if (!node2) {
        node2 = pathToQ.pop();
      }
    } else if (pathToP.length < pathToQ.length) {
      node2 = pathToQ.pop();
      if (!node1) {
        node1 = pathToP.pop();
      }
    } else {
      node1 = pathToP.pop();
      node2 = pathToQ.pop();
    }

    if (node1.val === node2.val) return node1;
  }

  return root;
};

var findPath = function(root, p) {
  if (!root) return null;
  if (root.val === p.val) return [root];
  let left = findPath(root.left, p);
  if (left) {
    left.unshift(root);
    return left;
  }
  let right = findPath(root.right, p);
  if (right) {
    right.unshift(root);
    return right;
  }
  return null;
};
