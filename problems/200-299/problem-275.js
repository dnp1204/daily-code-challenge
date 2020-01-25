/**
 * Company: Epic.
 *
 * The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent term
 * visually describes the digits appearing in the previous term. The first few terms are as follows:
 *
 * 1
 * 11
 * 21
 * 1211
 * 111221
 *
 * As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.
 *
 * Given an integer N, print the Nth term of this sequence.
 *
 * Leetcode: https://leetcode.com/problems/count-and-say/
 */
var countAndSay = function(n) {
  let result = ['1'];
  for (let i = 2; i <= n; i++) {
    const temp = [];
    for (let j = 0, count = 1; j < result.length; j++) {
      if (j + 1 === result.length || result[j] !== result[j + 1]) {
        temp.push(count + '');
        temp.push(result[j]);
        count = 1;
      } else {
        count++;
      }
    }
    result = temp;
  }
  return result.join('');
};
