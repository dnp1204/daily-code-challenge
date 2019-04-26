/**
 * Company: Amazon.
 *
 * Given a string s and an integer k, break up the string into multiple texts such
 * that each text has a length of k or less. You must break it up so that words don't
 * break across lines. If there's no way to break the text up, then return null.
 *
 * You can assume that there are no spaces at the ends of the string and that there
 * is exactly one space between each word.
 *
 * For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10,
 * you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No
 * string in the list has a length of more than 10.
 *
 * Youtube: https://www.youtube.com/watch?v=RORuwHiblPc
 */
function breakString(s, k) {
  const words = s.split(' ');
  let table = [];

  for (let i = 0; i < words.length; i++) {
    table[i] = [];
    for (let j = 0; j < words.length; j++) {
      table[i][j] = Infinity;
    }
  }
  for (let i = 0; i < words.length; i++) {
    let currentLine = '';
    let index = i;
    while (
      index < words.length &&
      (!currentLine || currentLine.length + words[index].length + 1 <= k)
    ) {
      if (!currentLine) currentLine = words[index];
      else currentLine = currentLine + ' ' + words[index];
      table[i][index] = Math.pow(k - currentLine.length, 2);
      index++;
    }
  }

  const minCost = Array(words.length);
  const result = Array(words.length);

  for (let i = words.length - 1; i >= 0; i--) {
    minCost[i] = table[i][words.length - 1];
    result[i] = words.length;

    for (let j = words.length - 1; j > i; j--) {
      if (table[i][j - 1] === Infinity) {
        continue;
      }
      if (minCost[i] > minCost[j] + table[i][j - 1]) {
        minCost[i] = minCost[j] + table[i][j - 1];
        result[i] = j;
      }
    }
  }

  let i = 0;
  let finalResult = [];
  while (i < words.length) {
    finalResult.push(words.slice(i, result[i]).join(' '));
    i = result[i];
  }

  return finalResult;
}

console.log(breakString('the quick brown fox jumps over the lazy dog', 10));
console.log(breakString('aaa bb cc ab', 5));
