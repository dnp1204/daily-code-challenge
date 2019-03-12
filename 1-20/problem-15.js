/***
 * Company: Uber.
 *
 * Given an array of integers, return a new array such that each element at
 * index i of the new array is the product of all the numbers in the original
 * array except the one at i
 *
 * For example, if the input was [1, 2, 3, 4, 5], the expected output would
 * be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expect output
 * would be [2, 3, 6]
 *
 * Follow-up: what if you can't use division.
 */
function findProduct(array) {
  if (array.length === 0) {
    return [];
  }

  let product = 1;
  let hasZero = false;

  array.forEach(current => {
    if (current !== 0) product *= current;
    else hasZero = true;
  });

  const result = array.map(number => {
    if (number === 0) {
      return product;
    } else if (hasZero) {
      return 0;
    }

    return product / number;
  });

  return result;
}

function findProductWithoutDivision(array) {
  const left = [1];
  const right = Array(array.length).fill(1);
  const result = [];

  for (let i = 1; i < array.length; i += 1) {
    left[i] = left[i - 1] * array[i - 1];
  }

  for (let i = array.length - 2; i >= 0; i -= 1) {
    right[i] = right[i + 1] * array[i + 1];
  }

  for (let i = 0; i < array.length; i += 1) {
    result.push(left[i] * right[i]);
  }

  return result;
}

const test1 = [1, 2, 3, 4, 5];
const test2 = [];
const test3 = [0, 2];
const test4 = [2, 0];
const test5 = [3, 2, 1];
const test6 = [3, 2, 0, 1];

console.log(findProduct(test1));
console.log(findProduct(test2));
console.log(findProduct(test3));
console.log(findProduct(test4));
console.log(findProduct(test5));
console.log(findProduct(test6));

console.log();

console.log(findProductWithoutDivision(test1));
console.log(findProductWithoutDivision(test2));
console.log(findProductWithoutDivision(test3));
console.log(findProductWithoutDivision(test4));
console.log(findProductWithoutDivision(test5));
console.log(findProductWithoutDivision(test6));
