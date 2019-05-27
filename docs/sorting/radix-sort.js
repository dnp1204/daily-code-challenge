const getDigit = function(nums, i) {
  return Math.floor(Math.abs(nums) / Math.pow(10, i)) % 10;
};

const digitCount = function(num) {
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const maxDigits = function(nums) {
  let max = 0;
  for (const num of nums) {
    max = Math.max(max, digitCount(num));
  }
  return max;
};

const radixSort = function(nums) {
  const maxDigitsCount = maxDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (const num of nums) {
      const bucketIndex = getDigit(num, k);
      digitBuckets[bucketIndex].push(num);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};
