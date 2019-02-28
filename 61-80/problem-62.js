/**
 * Company: Google.
 *
 * Implement integer exponentiation. That is, implement the pow(x, y) function,
 * where x and y are integers and returns x^y.
 *
 * Do this faster than the naive method of repeated multiplication.
 *
 * For example, pow(2, 10) should return 1024.
 */
function pow(x, y) {
  if (!x) return 0;
  else if (!y) return 1;

  let yAbs = Math.abs(y);
  let currentPow = 1;
  let prevResult = 0;
  let prevPow = 0;
  let result = x;

  while (currentPow <= yAbs) {
    prevResult = result;
    prevPow = currentPow;
    result *= result;
    currentPow *= 2;
  }

  prevResult *= pow(x, yAbs - prevPow);

  if (y !== yAbs) {
    return 1 / prevResult;
  }

  return prevResult;
}
