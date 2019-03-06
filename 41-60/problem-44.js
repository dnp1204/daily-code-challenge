/**
 * Company: Amazon.
 *
 * Given an integer k and a string s, find the length of the longest
 * substring that contains at most k distinct characters.
 *
 * For example, given s = "abcba" and k = 2, the longest substring with
 * k distinct characters is "bcb".
 *
 * Leetcode: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 */
function findLongestDistinctChars(s, k) {
  let index = (currentStart = num = 0);
  let end = s.length;
  let result = '';
  let store = {};

  const isNotValid = function() {
    let numOfElements = 0;
    for (const key in store) {
      if (store[key] > 0) {
        numOfElements++;
      }
    }
    return numOfElements < k;
  };

  while (index < end) {
    if (!store[s.charAt(index)]) {
      if (num + 1 > k) {
        while (!isNotValid()) {
          store[s.charAt(currentStart)] -= 1;
          currentStart++;
        }
      } else {
        num++;
      }
      store[s.charAt(index)] = 1;
    } else {
      store[s.charAt(index)] += 1;
    }

    if (index - currentStart + 1 > result.length) {
      result = s.substring(currentStart, index + 1);
    }

    index++;
  }

  if (num < k) return 'Error';
  return result;
}

console.log(findLongestDistinctChars('aabacbebebe', 1), '{"acbebebea"}');
console.log(findLongestDistinctChars('aabbcc', 1), '{"aa" , "bb" , "cc"}');
console.log(findLongestDistinctChars('aabbcc', 2), '{"aabb" , "bbcc"}');
console.log(
  findLongestDistinctChars('aabbcc', 3),
  '{"aabbcc" , "abbcc" , "aabbc" , "abbc" }'
);
console.log(findLongestDistinctChars('aaabbb', 3), 'error');
