/**
 * Company: Facebook.
 *
 * Given a number in Roman numeral format, convert it to decimal.
 *
 * Leetcode: https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function(s) {
  const value = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (i < s.length - 1) {
      const nextChar = s.charAt(i + 1);
      if (value[nextChar] > value[char]) {
        result += value[nextChar] - value[char];
        i++;
        continue;
      }
    }

    result += value[char];
  }

  return result;
};
