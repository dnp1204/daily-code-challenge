/**
 * Company: Triplebyte.
 *
 * You are given n numbers as well as n probabilities that sum up to 1.
 * Write a function to generate one of the numbers with its corresponding
 * probability.
 *
 * For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5,
 * 0.2, 0.2], your function should return 1 10% of the time, 2 50% of the
 * time, and 3 and 4 20% of the time.
 *
 * You can generate random numbers between 0 and 1 uniformly.
 *
 * GeeksForGeeks: https://www.geeksforgeeks.org/random-number-generator-in-arbitrary-probability-distribution-fashion/
 */
function findCeil(prefix, random, l, h) {
  let mid;
  while (l < h) {
    mid = Math.floor((l + h) / 2);
    random > prefix[mid] ? (l = mid + 1) : (h = mid);
  }
  return prefix[l] >= random ? l : -1;
}

function myRand(arr, freq, n) {
  const prefix = Array(n);
  prefix[0] = freq[0] * 100;

  for (i = 1; i < n; ++i) {
    prefix[i] = prefix[i - 1] + freq[i] * 100;
  }
  const random = Math.floor(Math.random() * prefix[n - 1]) + 1;
  const indexC = findCeil(prefix, random, 0, n - 1);
  return arr[indexC];
}

const nums = [1, 2, 3, 4];
const freq = [0.1, 0.5, 0.2, 0.2];

for (let i = 0; i < 10; i++) {
  console.log(myRand(nums, freq, nums.length));
}
