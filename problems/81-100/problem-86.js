/**
 * Company: Alibaba.
 *
 * Given an even number (greater than 2), return two prime numbers whose sum will be equal
 * to the given number.
 * A solution will always exist. See Goldbach’s conjecture.
 *
 * Example:
 * Input: 4
 * Output: 2 + 2 = 4
 * If there are more than one solution possible, return the lexicographically smaller solution.
 *
 * If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then
 * [a, b] < [c, d]
 * If a < c OR a == c AND b < d.
 *
 * Youtube: https://www.youtube.com/watch?v=I6HrVRGGYNI
 */
function findPrimePair(n) {
  const isPrime = Array(n + 1);

  const SieveOfEratosthenes = function(n, isPrime) {
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= n; i++) {
      isPrime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
      if (isPrime[p] == true) {
        for (let i = p * 2; i <= n; i += p) {
          isPrime[i] = false;
        }
      }
    }
  };

  SieveOfEratosthenes(n, isPrime);

  for (let i = 0; i < n; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      return { firstNum: i, secondNum: n - i };
    }
  }

  return null;
}

findPrimePair(74);
findPrimePair(24);
