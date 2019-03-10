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

function printStep(table, word1, word2) {
  let i = table.length - 1;
  let j = table[0].length - 1;

  while (i > 0 && j > 0) {
    if (word1.charAt(j - 1) !== word2.charAt(i - 1)) {
      const replace = table[i - 1][j - 1];
      const deletion = table[i][j - 1];
      const insertion = table[i - 1][j];
      const min = Math.min(replace, Math.min(deletion, insertion));

      if (min === replace) {
        console.log(
          `Replace ${word1.charAt(j - 1)} with ${word2.charAt(i - 1)}`
        );
        i = i - 1;
        j = j - 1;
      } else if (min === deletion) {
        console.log(`Remove ${word1.charAt(j - 1)}`);
        j = j - 1;
      } else {
        console.log(`Insert ${word2.charAt(i - 1)}`);
        i = i - 1;
      }
    } else {
      i = i - 1;
      j = j - 1;
    }
  }
}
