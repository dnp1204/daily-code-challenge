/**
 * Company: Amazon.
 *
 * Given a string, find the longest palindromic contiguous substring.
 * If there are more than one with the maximum length, return any one.
 *
 * For example, the longest palindromic substring of "aabcdcb" is "bcdcb".
 * The longest palindromic substring of "bananas" is "anana".
 *
 * Leetcode: https://leetcode.com/problems/longest-palindromic-substring/
 */
var longestPalindrome = function(s) {
  if (!s || s.length < 1) {
    return '';
  }

  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    const l1 = expand(s, i, i);
    const l2 = expand(s, i, i + 1);
    const l = Math.max(l1, l2);
    if (l > end - start) {
      start = i - Math.floor((l - 1) / 2);
      end = i + Math.floor(l / 2);
    }
  }

  return s.substring(start, end + 1);
};

function expand(s, left, right) {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left -= 1;
    right += 1;
  }

  return right - left - 1;
}
