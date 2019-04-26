/**
 * Company: Jane Street.
 *
 * Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.
 *
 * The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should
 * return 5 + 3 = 8.
 *
 * For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5,
 * since it is equivalent to ((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.
 *
 * You can assume the given expression is always valid.
 *
 * Leetcode: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (!isOperator(token)) {
      stack.push(parseInt(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      const result = evaluate(token, a, b);
      stack.push(result);
    }
  }
  return stack[0];
};

function isOperator(token) {
  return token === '+' || token === '-' || token === '*' || token === '/';
}

function evaluate(operator, a, b) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  return a * b < 0 ? -Math.floor(Math.abs(a) / Math.abs(b)) : Math.floor(a / b);
}

console.log(evalRPN(['-2', '3', '/']));
console.log(evalRPN(['70', '-62', '/']));
console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
console.log(
  evalRPN([
    '-78',
    '-33',
    '196',
    '+',
    '-19',
    '-',
    '115',
    '+',
    '-',
    '-99',
    '/',
    '-18',
    '8',
    '*',
    '-86',
    '-',
    '-',
    '16',
    '/',
    '26',
    '-14',
    '-',
    '-',
    '47',
    '-',
    '101',
    '-',
    '163',
    '*',
    '143',
    '-',
    '0',
    '-',
    '171',
    '+',
    '120',
    '*',
    '-60',
    '+',
    '156',
    '/',
    '173',
    '/',
    '-24',
    '11',
    '+',
    '21',
    '/',
    '*',
    '44',
    '*',
    '180',
    '70',
    '-40',
    '-',
    '*',
    '86',
    '132',
    '-84',
    '+',
    '*',
    '-',
    '38',
    '/',
    '/',
    '21',
    '28',
    '/',
    '+',
    '83',
    '/',
    '-31',
    '156',
    '-',
    '+',
    '28',
    '/',
    '95',
    '-',
    '120',
    '+',
    '8',
    '*',
    '90',
    '-',
    '-94',
    '*',
    '-73',
    '/',
    '-62',
    '/',
    '93',
    '*',
    '196',
    '-',
    '-59',
    '+',
    '187',
    '-',
    '143',
    '/',
    '-79',
    '-89',
    '+',
    '-'
  ])
);
