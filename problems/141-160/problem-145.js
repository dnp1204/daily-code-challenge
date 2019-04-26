/**
 * Company: Google.
 *
 * Given a string, split it into as few strings as possible such that each string is a palindrome.
 *
 * For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].
 *
 * Given the input string abc, return ["a", "b", "c"].
 *
 * Leetcode: https://leetcode.com/problems/palindrome-partitioning-ii/
 * Youtube: https://www.youtube.com/watch?v=lDYIvtBVmgo
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const n = s.length;
  const cut = Array(n);
  const pal = [];

  for (let i = 0; i < n; i++) {
    pal[i] = [];
    for (let j = 0; j < n; j++) {
      pal[i][j] = false;
    }
  }

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = 0; j <= i; j++) {
      if (s.charAt(i) === s.charAt(j) && (j + 1 > i - 1 || pal[j + 1][i - 1])) {
        pal[j][i] = true;
        min = j === 0 ? 0 : Math.min(min, cut[j - 1] + 1);
      }
    }
    cut[i] = min;
  }

  return cut[n - 1];
};
