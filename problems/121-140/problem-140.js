/**
 * Company: Bloomberg.
 *
 * Determine whether there exists a one-to-one character mapping from one string s1 to another s2.
 *
 * For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.
 *
 * Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
 *
 * Leetcode: https://leetcode.com/problems/isomorphic-strings/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);

    if (map[sChar]) {
      if (map[sChar] !== tChar) return false;
    } else {
      if (sChar !== tChar && tMap[tChar] && tMap[tChar] !== sChar) return false;
      map[sChar] = tChar;
      tMap[tChar] = sChar;
    }
  }

  return true;
};
