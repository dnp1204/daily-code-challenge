/**
 * Company: Cisco.
 *
 * Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and
 * 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.
 * For example, 10101010 should be 01010101. 11100010 should be 11010001.
 *
 * GeeksForGeeks: https://www.geeksforgeeks.org/swap-all-odd-and-even-bits/
 * Dailycoding: https://www.dailycodingproblem.com/blog/neat-bitwise-trick/
 */
var swapBits = function(x) {
  // Get all even bits of x
  let even_bits = x & 0xaaaaaaaa;

  // Get all odd bits of x
  let odd_bits = x & 0x55555555;

  // Right shift even bits
  even_bits >>= 1;

  // Left shift even bits
  odd_bits <<= 1;

  // Combine even and odd bits
  return even_bits | odd_bits;
};

console.log(swapBits(10101010));
console.log(swapBits(11100010));
