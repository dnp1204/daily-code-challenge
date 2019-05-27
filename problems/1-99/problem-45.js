/**
 * Company: Quora.
 *
 * Given a string, find the palindrome that can be made by
 * inserting the fewest number of characters as possible
 * anywhere in the word. If there is more than one palindrome
 * of minimum length that can be made, return the lexicographically
 * earliest one (the first one alphabetically).
 *
 * For example, given the string "race", you should return "ecarace",
 * since we can add three letters to it (which is the smallest amount
 * to make a palindrome). There are seven other palindromes that can
 * be made from "race" by adding three letters, but "ecarace" comes
 * first alphabetically.
 *
 * As another example, given the string "google", you should return "elgoogle".
 *
 * Youtube: https://www.youtube.com/watch?v=DOnK40BvazI
 */
function getMinAddition(s) {
  const helper = function(s, l, h) {
    if (l > h) return Number.MAX_SAFE_INTEGER;
    if (l === h) return 0;
    if (l === h - 1) return s.charAt[l] === s.charAt[h] ? 0 : 1;
    if (s.charAt(s) === s.charAt[l]) {
      return helper(s, l + 1, h - 1);
    }
    return Math.min(helper(s, l + 1, h), helper(s, l, h - 1)) + 1;
  };

  const dynamicHelper = function(s) {
    const length = s.length;
    const table = Array(length).fill(Array(length).fill(0));
    for (let gap = 1; gap < length; gap++) {
      for (let l = 0, h = gap; h < length; l++, h++) {
        if (s.charAt(l) === s.charAt(h)) {
          table[l][h] = table[l + 1][h - 1];
        } else {
          table[l][h] = Math.min(table[l + 1][h], table[l][h - 1]) + 1;
        }
      }
    }

    return table[0][length - 1];
  };

  return dynamicHelper(s, 0, s.length);
}
