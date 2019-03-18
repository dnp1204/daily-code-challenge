/**
 * Company: Microsoft.
 *
 * Given a dictionary of words and a string made up of those words
 * (no spaces), return the original sentence in a list. If there is
 * more than one possible reconstruction, return any of them. If
 * there is no possible reconstruction, then return null.
 *
 * For example, given the set of words 'quick', 'brown', 'the', 'fox',
 * and the string "thequickbrownfox", you should return
 * ['the', 'quick', 'brown', 'fox'].
 *
 * Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond',
 * and the string "bedbathandbeyond", return either ['bed', 'bath',
 * 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
 *
 * Leetcode: https://leetcode.com/problems/word-break-ii/
 */
var wordBreak = function(s, wordDict) {
  const set = new Set();
  const result = [];

  for (const word of wordDict) {
    set.add(word);
  }

  const helper = function(start, end, path = []) {
    if (start === end) {
      result.push(path.join(' '));
      return path;
    }

    for (let i = start; i <= end; i++) {
      if (set.has(s.substring(start, i))) {
        helper(i, end, [...path, s.substring(start, i)]);
      }
    }

    return path;
  };

  helper(0, s.length);

  return result;
};
