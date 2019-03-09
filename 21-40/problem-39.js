/**
 * Company: Google.
 *
 * The edit distance between two strings refers to the minimum number of character
 * insertions, deletions, and substitutions required to change one string to the
 * other. For example, the edit distance between “kitten” and “sitting” is three:
 * substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
 * Given two strings, compute the edit distance between them.
 *
 * Leetcode: https://leetcode.com/problems/edit-distance/
 * Yotube: https://www.youtube.com/watch?v=We3YDTzNXEk
 */
var minDistance = function(word1, word2) {
  const table = [];

  for (let i = 0; i <= word2.length; i++) {
    table[i] = [i];
    for (let j = 0; j < word1.length; j++) {
      if (i === 0) {
        table[i].push(j + 1);
      } else if (word2.charAt(i - 1) === word1.charAt(j)) {
        table[i][j + 1] = table[i - 1][j];
      } else {
        table[i][j + 1] =
          Math.min(
            table[i - 1][j],
            Math.min(table[i][j], table[i - 1][j + 1])
          ) + 1;
      }
    }
  }

  return table[word2.length][word1.length];
};
