/**
 * Company: Google.
 *
 * Given a string of parentheses, write a function to compute the minimum number of parentheses
 * to be removed to make the string valid (i.e. each open parenthesis is eventually closed).
 *
 * For example, given the string "()())()", you should return 1. Given the string ")(", you
 * should return 2, since we must remove all of them.
 *
 * Leetcode: https://leetcode.com/problems/remove-invalid-parentheses/
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  if (s == null) return res;
  let res = [];

  const visited = new Set();
  const queue = [];
  let found = false;

  queue.push(s);
  visited.add(s);

  while (queue.length) {
    s = queue.shift();

    if (isValid(s)) {
      res.push(s);
      found = true;
    }

    if (found) continue;

    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) !== '(' && s.charAt(i) !== ')') continue;

      const t = s.substring(0, i) + s.substring(i + 1);

      if (!visited.has(t)) {
        queue.push(t);
        visited.add(t);
      }
    }
  }

  return res;
};

function isValid(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c == '(') count++;
    if (c == ')' && count-- === 0) return false;
  }

  return count == 0;
}

console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses(')('));
