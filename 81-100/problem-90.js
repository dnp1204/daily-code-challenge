/**
 * Company: Facebook.
 *
 * Given a binary tree, return the level of the tree with minimum sum.
 */
function findMinumumSumOfLevel(root) {
  if (!root) return root;
  const queue = [root];
  let min = root.val;
  let level = 0;
  let minLevel = 0;

  while (queue.length) {
    let currentSum = 0;
    let count = queue.length;

    while (count > 0) {
      const node = queue.shift();
      currentSum += node.val;

      if (node.left) {
        queue.push(node);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (min > currentSum) {
      min = currentSum;
      minLevel = level;
    }

    level += 1;
    count -= 1;
  }

  return minLevel;
}
