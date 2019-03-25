/**
 * Company: Facebook.
 *
 * Implement regular expression matching with the following special characters:
 * . (period) which matches any single character
 * * (asterisk) which matches zero or more of the preceding element
 *
 * That is, implement a function that takes in a string and a valid regular
 * expression and returns whether or not the string matches the regular expression.
 *
 * For example, given the regular expression "ra." and the string "ray", your function
 * should return true. The same regular expression on the string "raymond" should
 * return false.
 *
 * Given the regular expression ".*at" and the string "chat", your function should
 * return true. The same regular expression on the string "chats" should return false.
 *
 * Leetcode: https://leetcode.com/problems/regular-expression-matching/
 * Youtube: https://www.youtube.com/watch?v=l3hda49XcDE
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const table = [];
  for (let i = 0; i <= s.length; i++) {
    table[i] = [];
    for (let j = 0; j <= p.length; j++) {
      table[i][j] = false;
    }
  }
  table[0][0] = true;

  for (let j = 1; j < table[0].length; j++) {
    if (p.charAt(j - 1) === '*') {
      if (j === 1) {
        table[0][j] = true;
      } else {
        table[0][j] = table[0][j - 2];
      }
    }
  }

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
      if (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '.') {
        table[i][j] = table[i - 1][j - 1];
      } else if (p.charAt(j - 1) === '*') {
        if (table[i][j - 2]) {
          table[i][j] = true;
        } else if (
          s.charAt(i - 1) === p.charAt(j - 2) ||
          p.charAt(j - 2) === '.'
        ) {
          table[i][j] = table[i - 1][j];
        }
      }
    }
  }

  return table[s.length][p.length];
};
