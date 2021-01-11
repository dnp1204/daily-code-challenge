/**
 * Company: Glassdoor.
 *
 * An imminent hurricane threatens the coastal town of Codeville. If at most two people can fit in a rescue
 * boat, and the maximum weight limit for a given boat is k, determine how many boats will be needed to save
 * everyone.
 *
 * For example, given a population with weights [100, 200, 150, 80] and a boat limit of 200, the smallest
 * number of boats required will be three.
 */
const removeElement = (array, limit) => {
    let j = array.length - 1;

    while(j >= 0) {
    if (array[j] > limit) {
      array.splice(j, 1);
      console.log("here", array)
    }
    --j;
    }
    return array;
}

const mainFunc = (array, limit) => {
  let counter = 0;
  array.sort(function(a, b){return a - b});
  array = removeElement(array, limit);

  while (array.length>0) {
    let maxEl = array.pop();
    array.splice(maxEl, 1);
    let i=-1;
    while (array[i+1]<limit-maxEl) {
      ++i;
      if (i>=0) {
        array.splice(array.shift(), 1);
      }
    }
    ++counter;
  }
  return counter;
}

// tests
let arr = [100, 200, 150, 80];
let limit = 200;
let res = mainFunc(arr, limit);
console.log(`Number of boats required: ${res}`);
