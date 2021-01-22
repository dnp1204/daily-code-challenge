/**
 * Company:  Netflix.
 *
 * Given a sorted list of integers of length N, determine if an element x is in the list
 * without performing any multiplication, division, or bit-shift operations.
 *
 * Do this in O(log N) time.
 */

const midEl = (arr, l, r) => {
  let p = r + 1;
  let q = l;
  for (let i = 0; i < arr.length; ++i) {
    p -= 1;
    q += 1;
    if (p == q) {
      return p;
    }
    if (p < q) {
      return p;
    }
  }
  return q;
};

const binarySearch = (arr, l, r, x) => {
  if (r >= l) {
    let mid = +midEl(arr, l, r);

    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] > x) {
      return binarySearch(arr, l, mid - 1, x);
    } else {
      mid += 1;
      return binarySearch(arr, mid++, r, x);
    }
  } else {
    return -1;
  }
};

// tests
let array = [3, 7, 9, 15, 17, 20, 90];
let lef = 0;
let rig = array.length - 1;
let res = binarySearch(array, lef, rig, 90);
console.log(res);

let arrayTwo = [5, 9, 21, 77, 120];
let lefTwo = 0;
let rigTwo = arrayTwo.length - 1;
let resTwo = binarySearch(arrayTwo, lefTwo, rigTwo, 21);
console.log(resTwo);

let arrayThree = [7, 9, 55, 1477, 1957];
let lefThree = 0;
let rigThree = arrayThree.length - 1;
let resThree = binarySearch(arrayThree, lefThree, rigThree, 1477);
console.log(resThree);
