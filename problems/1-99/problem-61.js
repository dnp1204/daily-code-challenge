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

function pow2(x, y) {
  let temp;
  if (Math.abs(y) === 0) return 1;
  if (Math.abs(y) === 1) return x;
  temp = pow2(x, Math.floor(y / 2));
  if (y % 2 == 0) return temp * temp;
  else if (y > 0) return x * temp * temp;
  return 1 / (temp * temp);
}

console.log(pow2(2, 4));
