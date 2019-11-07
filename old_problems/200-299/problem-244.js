/**
 * Company: Square.
 *
 * The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N.
 * The method is to take increasingly larger prime numbers, and mark their multiples as composite.
 *
 * For example, to find all primes less than 100, we would first mark [4, 6, 8, ...] (multiples of
 * two), then [6, 9, 12, ...] (multiples of three), and so on. Once we have done this for all primes
 * less than N, the unmarked numbers that remain will be prime.
 *
 * Implement this algorithm.
 *
 * Bonus: Create a generator that produces primes indefinitely (that is, without taking N as an input).
 */
function findPrime(n, lower = 2) {
  const isPrime = Array(n + 1);

  isPrime[0] = isPrime[1] = false;

  for (let i = lower; i <= n; i++) {
    isPrime[i] = true;
  }

  for (let p = lower; p * p <= n; p++) {
    if (isPrime[p] == true) {
      for (let i = p * 2; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }

  const ans = [];
  isPrime.forEach((ele, index) => {
    if (ele) ans.push(index);
  });

  return ans;
}

const STEP = 100;

class PrimeGenerator {
  constructor() {
    this.start = 2;
    this.prime = [];
    this.isPrime = [];
    this.isPrime[0] = this.isPrime[1] = false;
  }

  findPrimes(n) {
    for (let i = this.start; i <= n; i++) {
      this.isPrime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
      if (this.isPrime[p] == true) {
        for (let i = p * 2; i <= n; i += p) {
          this.isPrime[i] = false;
        }
      }
    }

    const ans = [];
    for (let i = this.start; i <= this.start + STEP; i++) {
      if (this.isPrime[i]) ans.push(i);
    }
    return ans;
  }

  init() {
    this.prime = this.findPrimes(this.start + STEP);
    this.start += STEP + 1;
  }

  generate() {
    if (!this.prime.length) this.init();
    return this.prime.shift();
  }
}

console.log(findPrime(10));
const generator = new PrimeGenerator();
for (let i = 0; i < 215; i++) {
  console.log(`Prime #${i} is ${generator.generate()}`);
}
