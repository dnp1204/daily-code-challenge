/**
 * Company: Dropbox.
 *
 * Given the root to a binary search tree, find the second largest node in the tree
 */
function findSecondLargest(root) {
  const largest = -1;
  const second = -1;

  const helper = function(root) {
    if (!root) return second;
    const val = root.val;
    if (val > largest) {
      second = largest;
      largest = val;
    } else if (val > second) {
      second = val;
    }
  };

  return helper(root);
}
