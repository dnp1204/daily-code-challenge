/**
 * Company: Microsoft.
 *
 * A number is considered perfect if its digits sum up to exactly 10.
 * Given a positive integer n, return the n-th perfect number.
 *
 * For example, given 1, you should return 19. Given 2, you should
 * return 28.
 */
function findNth(n) {
  let count = 0;
  for (let curr = 19; ; curr += 9) {
    // Find sum of digits in current no.
    let sum = 0;
    for (let x = curr; x > 0; x = x / 10) sum = sum + (x % 10);

    // If sum is 10, we increment count
    if (sum == 10) count++;

    // If count becomes n, we return current
    // number.
    if (count == n) return curr;
  }
}
