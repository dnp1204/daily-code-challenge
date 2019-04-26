/**
 * Company: Google.
 *
 * Given a string, return the first recurring character in it, or null if there is
 * no recurring character.
 *
 * For example, given the string "acbbac", return "b". Given the string "abcdef",
 * return null.
 */
function findFirstRecurringCharacter(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)]) return s.charAt(i);
    else map[s.charAt(i)] = true;
  }
  return null;
}

console.log(findFirstRecurringCharacter('acbbac'));
console.log(findFirstRecurringCharacter('abcdef'));
