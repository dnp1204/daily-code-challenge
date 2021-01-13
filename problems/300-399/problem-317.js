/**
 * Company: Yahoo.
 *
 * Write a function that returns the bitwise AND of all integers between M and N, inclusive.
 */

const mainFunc = (x, y) => {
  let res = y;
  
  for (let i = x; i < y; ++i) {
    res &= i;
  }
  return res;
}


// test
let resultOne = mainFunc(193, 215);
console.log(resultOne);

let resultTwo = mainFunc(4, 5);
console.log(resultTwo);

let resultThree = mainFunc(100, 200);
console.log(resultThree);

