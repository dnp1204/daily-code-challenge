/**
 * Company: Facebook.
 *
 * Given a string of parentheses, find the balanced string that can be produced from
 * it using the minimum number of insertions and deletions. If there are multiple
 * solutions, return any of them.
 *
 * For example, given "(()", you could return "(())". Given "))()(", you could return
 * "()()()()".
 *
 * Leetcode: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 */
var minAddToMakeValid = function(S) {
  const stack = [];
  const ans = [];

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === '(') {
      stack.push('(');
      ans.push('(');
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        ans.push('(');
      }
      ans.push(')');
    }
  }

  while (stack.length) {
    stack.pop();
    ans.push(')');
  }

  return ans.join('');
};

console.log(minAddToMakeValid('(()'));
console.log(minAddToMakeValid('(((((((()'));
console.log(minAddToMakeValid('))()('));
console.log(minAddToMakeValid('()()()()'));
console.log(minAddToMakeValid('(())'));
