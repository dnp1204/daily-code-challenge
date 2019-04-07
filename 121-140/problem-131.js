/**
 * Company: Airbnb.
 *
 * Given a list of words, find all pairs of unique indices such that the concatenation
 * of the two words is a palindrome.
 *
 * For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0), (2, 3)].
 *
 * Leetcode: https://leetcode.com/problems/palindrome-pairs/
 */
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const map = {};
  const result = [];

  for (let i = 0; i < words.length; i++) {
    map[words[i]] = i;
  }

  if (map[''] != null) {
    const index = map[''];
    for (const word of words) {
      if (isPalindrome(word) && map[word] !== index) {
        result.push([index, map[word]]);
        result.push([map[word], index]);
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    const reverseWord = words[i]
      .split('')
      .reverse()
      .join('');
    const index = map[reverseWord];

    if (index != null && i !== index) {
      result.push([index, i]);
    }
  }

  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    for (let cut = 1; cut < cur.length; cut++) {
      if (isPalindrome(cur.substring(0, cut))) {
        const cutR = cur
          .substring(cut)
          .split('')
          .reverse()
          .join('');
        if (map[cutR] != null) {
          const found = map[cutR];
          if (found == i) continue;
          result.push([found, i]);
        }
      }

      if (isPalindrome(cur.substring(cut))) {
        const cutR = cur
          .substring(0, cut)
          .split('')
          .reverse()
          .join('');
        if (map[cutR] != null) {
          const found = map[cutR];
          if (found == i) continue;
          result.push([i, found]);
        }
      }
    }
  }

  return result;
};

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s.charAt(i) != s.charAt(j)) return false;
    i++;
    j--;
  }
  return true;
}
