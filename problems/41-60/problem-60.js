/**
 * Company: Google.
 *
 * Given the root to a binary tree, implement serialize (root), which
 * serializes the tree into a string, and deserialize(s), which
 * deserializes the string back into the tree.
 *
 * For example, given the following Node class
 *
 * class Node:
 *  def __init__(self, val, left=None, right=None):
 *    self.val = val
 *    self.left = left
 *    self.right = right
 *
 * The following test should pass:
 * node = Node('root', Node('left', Node('left.left)), Node('right))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  const data = [root.val];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    data.push(node.left ? node.left.val : null);
    data.push(node.right ? node.right.val : null);
  }

  let index = data.length - 1;
  while (data[index] == null) {
    index--;
  }

  return data.slice(0, index + 1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length) return null;
  const root = new TreeNode(data[0]);
  const queue = [root];

  for (let i = 1; i < data.length; i++) {
    const node = queue.shift();
    if (data[i] != null) {
      const treeNode = new TreeNode(data[i]);
      node.left = treeNode;
      queue.push(node.left);
    }
    if (data[++i] != null) {
      const treeNode = new TreeNode(data[i]);
      node.right = treeNode;
      queue.push(node.right);
    }
  }
  return root;
};
