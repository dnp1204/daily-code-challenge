/**
 * Company: Palantir.
 *
 * The ancient Egyptians used to express fractions as a sum of several terms where each numerator
 * is one. For example, 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.
 *
 * Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.
 */
const findEgyptianFraction = function(a, b) {
  if (a === 0 || b === 0) return;

  if (b % a === 0) {
    console.log(`1 / ${b / a}`);
    return;
  }

  if (a % b === 0) {
    console.log(`${b / a}`);
    return;
  }

  if (a > b) {
    console.log(Math.floor(a / b) + ' + ');
    findEgyptianFraction(a % b, b);
    return;
  }

  const n = Math.ceil(b / a);
  console.log('1/' + n + ' + ');

  findEgyptianFraction(a * n - b, b * n);
};

findEgyptianFraction(4, 13);
findEgyptianFraction(13, 4);
