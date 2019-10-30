/**
 * Company: Facebook.
 *
 * Given the mapping a = 1, b = 2,..., z = 26, and an encoded message,
 * count the number of ways it can be decoded
 *
 * For example, the message '111' would give 3, since it could be
 * decoded as 'aaa', 'ka', and 'ak'. You can assume that the messages
 * are decodable. For example '001' is not allowed
 *
 * Leetcode: https://leetcode.com/problems/decode-ways/
 */
function countWaysOfDecoded(message) {
  // return helper(message, message.length);
  return helperDP(message, message.length);
}

function helper(message, k) {
  if (k === 0) {
    return 1;
  }

  s = message.length - k;
  if (message[s] === '0') {
    return 0;
  }

  let result = helper(message, k - 1);
  if (k >= 2 && parseInt(message.substring(s, s + 2)) <= 26) {
    result += helper(message, k - 2);
  }

  return result;
}

function helperDP(message, k, memo = []) {
  if (k === 0) {
    return 1;
  }

  s = message.length - k;
  if (message[s] === '0') {
    return 0;
  }

  if (memo[k]) {
    return memo[k];
  }

  let result = helper(message, k - 1, memo);
  if (k >= 2 && parseInt(message.substring(s, s + 2)) <= 26) {
    result += helper(message, k - 2, memo);
  }

  memo[k] = result;
  return result;
}

console.log(countWaysOfDecoded('111'));
console.log(countWaysOfDecoded('11111111111111111111111'));
console.log(countWaysOfDecoded('12345'));
