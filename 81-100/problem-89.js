/**
 * Company: Google.
 *
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same
 * structure and node values with a subtree of s. A subtree of s is a tree consists of
 * a node in s and all of this node's descendants. The tree s could also be considered
 * as a subtree of itself.
 */
var isSubtree = function(s, t) {
  var traverse = function(s, t) {
    if (!s) return false;
    return helper(s, t) || traverse(s.left, t) || traverse(s.right, t);
  };

  var helper = function(s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;
    return (
      s.val === t.val && helper(s.left, t.left) && helper(s.right, t.right)
    );
  };

  return traverse(s, t);
};
