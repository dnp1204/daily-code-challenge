/**
 * Company: Apple.
 *
 * Gray code is a binary code where each successive value differ in only one bit,
 * as well as when wrapping around. Gray code is common in hardware so that we
 * don't see temporary spurious values during transitions.
 *
 * Given a number of bits n, generate a possible gray code for it.
 *
 * For example, for n = 2, one gray code would be [00, 01, 11, 10].
 *
 * Leetcode: https://leetcode.com/problems/gray-code/
 */
var grayCode = function(n) {
  const result = [];
  for (let i = 0; i < 1 << n; i++) result.push(i ^ (i >> 1));
  return result;
};
