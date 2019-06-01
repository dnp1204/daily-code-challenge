/**
 * Company: Quora.
 *
 * Given an absolute pathname that may have . or .. as part of it, return the shortest
 * standardized path.
 *
 * For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".
 *
 * Leetcode: https://leetcode.com/problems/simplify-path/
 */
var simplifyPath = function(path) {
  const skip = new Set(['.', '..', '', '"']);
  const dirs = path.split('/');
  const stack = [];

  for (const dir of dirs) {
    if (dir === '..' && stack.length) stack.pop();
    if (!skip.has(dir)) stack.push(dir);
  }

  return '/' + stack.join('/');
};
