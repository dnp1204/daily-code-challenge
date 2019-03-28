/**
 * Company: Amazon.
 *
 * Given a string, determine whether any permutation of it is a palindrome.
 *
 * For example, carrace should return true, since it can be rearranged to
 * form racecar, which is a palindrome. daily should return false, since
 * there's no rearrangement that can form a palindrome.
 */
// TODO:
const canFormPalindrome = function(s) {
  const table = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    table[s.charAt(i)] ? table[s.charAt(i)]++ : (table[s.charAt(i)] = 1);
    if (table[s.charAt(i)] % 2 !== 0) count++;
    else count--;
  }
  return count <= 1;
};

console.log(canFormPalindrome('carrace'));
console.log(canFormPalindrome('daily'));
console.log(canFormPalindrome('geeksogeeks'));
console.log(canFormPalindrome('geeksforgeeks'));
console.log(canFormPalindrome('ababa'));
