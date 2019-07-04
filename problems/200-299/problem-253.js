/**
 * Company: PayPal.
 *
 * Given a string and a number of lines k, print the string in zigzag form. In zigzag,
 * characters are printed out diagonally from top left to bottom right until reaching
 * the kth line, then back up to top right, and so on.
 *
 * For example, given the sentence "thisisazigzag" and k = 4, you should print:
 *
 * t     a     g
 *  h   s z   a
 *  i i   i z
 *   s     g
 *
 * Leetcode: https://leetcode.com/problems/zigzag-conversion/
 */
var convert = function(s, numRows) {
  if (numRows === 1 || numRows > s.length) return s;

  let L = Array(numRows).fill('');
  let index = 0,
    step = 1;

  for (let i = 0; i < s.length; i += 1) {
    L[index] += s.charAt(i);
    if (index === 0) step = 1;
    else if (index === numRows - 1) step = -1;
    index += step;
  }

  return L.join('');
};
