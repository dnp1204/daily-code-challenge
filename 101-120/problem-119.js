/**
 * Company: Unknown
 *
 * Find an efficient algorithm to find the smallest distance (measured in number of words)
 * between any two given words in a string.
 *
 * For example, given words "hello", and "world" and a text content of "dog cat hello cat
 * dog dog hello cat world", return 1 because there's only one word "cat" in between the
 * two words.
 */
function findSmallestDistance(s, word1, word2) {
  const words = s.split(' ');
  let start = (end = -1);
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      start = i;
    }
    if (words[i] === word2) {
      end = i;
    }
    if (start !== -1 && end !== -1) {
      min = Math.min(min, Math.abs(end - start) - 1);
    }
  }

  return min;
}

console.log(
  findSmallestDistance(
    'dog cat hello cat dog dog hello cat world',
    'hello',
    'world'
  )
);
console.log(
  findSmallestDistance(
    'Java String array FAQ: Can you share some Java array examples, specifically some String array examples, as well as the Java 5 for loop syntax?',
    'Java',
    'as'
  )
);
console.log(
  findSmallestDistance(
    'Java String array FAQ: Can you share some Java array examples, specifically some String array examples, as well as the Java 5 for loop syntax?',
    'FAQ:',
    'examples,'
  )
);
