/**
 * Company: Facebook.
 *
 * Given a 32-bit integer, return the number with its bits reversed.
 *
 * For example, given the binary number 1111 0000 1111 0000 1111
 * 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111.
 */
const reverseBits = function(num) {
  const inverted = [];
  for (let i = 0; i < num.length; i++) {
    if (num.charAt(i) === '0') {
      inverted.push('1');
    } else if (num.charAt(i) === '1') {
      inverted.push('0');
    } else {
      inverted.push(num.charAt(i));
    }
  }
  return inverted.join('');
};

console.log(reverseBits('1111 0000 1111 0000 1111 0000 1111 0000'));
