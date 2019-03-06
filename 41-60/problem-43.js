/**
 * Company: Amazon.
 *
 * Run-length encoding is a fast and simple method of encoding
 * strings. The basic idea is to represent repeated successive
 * characters as a single count and character. For example, the string
 * "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 *
 * Implement run-length encoding and decoding. You can assume the string
 * to be encoded have no digits and consists solely of alphabetic
 * characters. You can assume the string to be decoded is valid.
 */
const encode = function(s) {
  let result = '';
  let count = 0;
  let index = 0;
  let pointer = 0;

  while (index < s.length) {
    if (s.charAt(index) === s.charAt(pointer)) {
      count++;
    } else {
      result = result + count + s.charAt(pointer);
      pointer = index;
      count = 1;
    }
    index++;
  }

  result = result + count + s.charAt(pointer);

  return result;
};

const decode = function(s) {
  let result = '';
  for (let index = 0; index < s.length; index += 2) {
    const letter = s.charAt(index + 1);
    for (let j = 0; j < parseInt(s.charAt(index)); j++) {
      result += letter;
    }
  }
  return result;
};
