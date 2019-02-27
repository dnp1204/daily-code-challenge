/**
 * Company: Square.
 *
 * Assume you have access to a function toss_biased() which returns 0 or 1 with a
 * probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the
 * bias of the coin.
 *
 * Write a function to simulate an unbiased coin toss.
 */
var toss_unbiased = function() {
  const val1 = toss_biased();
  const val2 = toss_biased();

  if (val1 === 0 && val2 === 1) return 0;
  if (val1 === 1 && val2 === 0) return 1;

  return toss_unbiased();
};
