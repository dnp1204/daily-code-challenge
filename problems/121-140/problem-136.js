/**
 * Company: Dropbox.
 *
 * Given a string s and a list of words words, where each word is the same length,
 * find all starting indices of substrings in s that is a concatenation of every
 * word in words exactly once.
 *
 * For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return
 * [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.
 *
 * Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there
 * are no substrings composed of "dog" and "cat" in s.
 *
 * The order of the indices does not matter.
 *
 * Leetcode: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words.length) return [];

  const wordCount = {};

  const wordLength = words[0].length;
  const wordsLength = words.length;
  const result = [];

  if (wordsLength * wordLength > s.length) return result;

  for (const word of words) {
    wordCount[word] ? wordCount[word]++ : (wordCount[word] = 1);
  }

  for (let i = 0; i < s.length - wordLength * wordsLength + 1; i++) {
    let j = 0;
    let seen = {};

    while (j < wordsLength) {
      const sub = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
      if (wordCount[sub]) {
        seen[sub] ? seen[sub]++ : (seen[sub] = 1);
        if (seen[sub] > wordCount[sub]) break;
      } else {
        break;
      }
      j++;
    }

    if (j === wordsLength) result.push(i);
  }

  return result;
};
