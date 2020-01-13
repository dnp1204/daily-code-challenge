/**
 * Company: Yelp.
 *
 * Given a mapping of digits to letters (as in a phone number), and a digit string,
 * return all possible letters the number could represent. You can assume each valid
 * number in the mapping is a single digit.
 *
 * For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should
 * return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
 *
 * Leetcode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
var letterCombinations = function(digits) {
  const digitsToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  const nums = digits.split('');

  const helper = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return digitsToLetters[nums[0]];
    const letters = helper(nums.slice(1, nums.length));
    const temp = [];
    for (const letterLeft of digitsToLetters[nums[0]]) {
      for (const letterRight of letters) {
        temp.push(letterLeft + letterRight);
      }
    }
    return temp;
  };

  return helper(nums);
};
