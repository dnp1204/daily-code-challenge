/**
 * Company: Apple.
 *
 * Given a tree, find the largest tree/subtree that is a BST.
 * Given a tree, return the size of the largest tree/subtree that is a BST.
 */
class ValueInfo {
  constructor(size, min, max, answer, isBST) {
    this.size = size;
    this.min = min;
    this.max = max;
    this.answer = answer;
    this.isBST = isBST;
  }
}

function findLargestBST(root) {
  const helper = function(root) {
    if (!root)
      return new ValueInfo(
        0,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0,
        true
      );
    if (!root.right && !root.left)
      return new ValueInfo(1, root.val, root.val, 1, true);

    const left = helper(root.left);
    const right = helper(root.right);
    const value = new ValueInfo(0, 0, 0, 0, false);

    value.size = left.size + right.size + 1;

    if (
      left.isBST &&
      right.isBST &&
      left.max < root.val &&
      right.min < root.val
    ) {
      value.min = Math.min(right.min, Math.min(root.data, left.min));
      value.max = Math.max(right.max, Math.max(root.value, left.max));
      value.answer = value.size;
      value.isBST = true;
      return value;
    }

    value.answer = Math.max(left.answer, right.answer);
    value.isBST = false;
    return value;
  };

  const result = helper(root);
  return result.answer;
}
