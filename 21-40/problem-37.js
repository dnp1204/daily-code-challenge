/**
 * Company: Facebook
 *
 * Given a string of round, curly, and square open and closing brackets,
 * return whether the brackets are balanced (well-formed).
 *
 * For example, given the string "([])[]({})", you should return true.
 *
 * Given the string "([)]" or "((()", you should return false.
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const c = s.charAt(i);

    if (c === '(') stack.push(')');
    else if (c === '{') stack.push('}');
    else if (c === '[') stack.push(']');
    else if (stack.length === 0 || stack.pop() !== c) return false;
  }

  return stack.length === 0;
};
