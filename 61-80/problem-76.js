/**
 * Company: Google.
 *
 * Given two strings A and B, return whether or not A can be shifted some
 * number of times to get B.
 *
 * For example, if A is abcde and B is cdeab, return true. If A is abc and
 * B is acb, return false.
 *
 * Leetcode: https://leetcode.com/problems/rotate-string/
 */
var rotateString = function(A, B) {
  const method1 = function(A, B) {
    return A.length === B.length && (A + A).includes(B);
  };

  const method2 = function(A, B) {
    if (A === B) return true;
    const charsA = A.split('');
    for (let i = 0; i < charsA.length; i++) {
      const left = charsA.slice(0, i + 1);
      const right = charsA.slice(i + 1, charsA.length);
      let newA = right.concat(left).join('');
      if (newA === B) return true;
    }
    return false;
  };

  return method1(A, B);
};
