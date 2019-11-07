/**
 * Company: Facebook.
 *
 * Given a string consisting of parentheses, single digits, and positive and negative signs,
 * convert the string into a mathematical expression to obtain the answer.
 *
 * Don't use eval or a similar built-in parser.
 *
 * For example, given '-1 + (2 + 3)', you should return 4.
 *
 * Leetcode: https://leetcode.com/problems/basic-calculator/
 */
var calculate = function(s) {
  if (!s.length) return 0;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    const nums = [];

    while (isNumber(char) && i < s.length) {
      nums.push(char);
      char = s.charAt(++i);
    }

    if (nums.length) {
      const num = parseInt(nums.join(''));
      stack.push(num);
    }

    if (char === '' || char === ' ') continue;
    if (char === ')') {
      while (stack.length) {
        const b = stack.pop();
        const operator = stack.pop();

        if (!isOperator(operator)) {
          stack.push(b);
          break;
        }

        const a = stack.pop();
        const temp = calc(a, b, operator);
        stack.push(temp);
      }
    } else {
      if (isOperator(char) && stack.length >= 3) {
        evaluate(stack);
      }
      stack.push(char);
    }
  }

  while (stack.length > 1) {
    evaluate(stack);
  }

  return stack[0];
};

const isNumber = function(char) {
  return parseInt(char) == char;
};

const isOperator = function(char) {
  return char === '+' || char === '-';
};

const calc = function(a, b, operator) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
};

const evaluate = function(stack) {
  const b = stack.pop();
  const operator = stack.pop();
  const a = stack.pop();

  if (isNumber(a) && isNumber(b) && isOperator(operator)) {
    const temp = calc(a, b, operator);
    stack.push(temp);
  } else {
    stack.push(a);
    stack.push(operator);
    stack.push(b);
  }
};
