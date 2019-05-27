/**
 * Company: Google.
 *
 * You're given a string consisting solely of (, ), and *. * can represent
 * either a (, ), or an empty string. Determine whether the parentheses
 * are balanced.
 *
 * For example, (()* and (*) are balanced. )*( is not balanced.
 *
 * Leetcode: https://leetcode.com/problems/valid-parenthesis-string/
 */
var checkValidString = function(s) {
  const parens = s.split('');

  const helper = function(parens, index, count) {
    if (index === parens.length) return count === 0;
    if (count < 0) return false;
    if (parens[index] === '(') return helper(parens, index + 1, count + 1);
    else if (parens[index] === ')') return helper(parens, index + 1, count - 1);
    else
      return (
        helper(parens, index + 1, count) ||
        helper(parens, index + 1, count + 1) ||
        helper(parens, index + 1, count - 1)
      );
  };

  const helper2 = function(parens) {
    const brackets = [];
    const wildcards = [];

    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        brackets.push(i);
      } else if (parens[i] === '*') {
        wildcards.push(i);
      } else {
        if (brackets.length === 0) {
          if (wildcards.length === 0) {
            return false;
          }
          wildcards.pop();
        } else {
          brackets.pop();
        }
      }
    }

    if (brackets.length !== 0) {
      while (brackets.length !== 0) {
        if (
          wildcards.length === 0 ||
          brackets[brackets.length - 1] > wildcards[wildcards.length - 1]
        ) {
          return false;
        } else {
          brackets.pop();
          wildcards.pop();
        }
      }
    }
  };

  return helper2(parens, 0, 0);
};
