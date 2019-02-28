/**
 * Company: Two Sigma
 *
 * Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform
 * probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive)
 */
const rand7 = function() {
  let result = 6;
  while (result >= 6) result = rand(7);
  return result;
};
