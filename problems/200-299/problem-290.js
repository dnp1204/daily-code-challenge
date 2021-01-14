/**
 * Company: Facebook.
 *
 * On a mysterious island there are creatures known as Quxes which come in three colors: red, green,
 * and blue. One power of the Qux is that if two of them are standing next to each other, they can
 * transform into a single creature of the third color.
 *
 * Given N Quxes standing in a line, determine the smallest number of them remaining after any possible
 * sequence of such transformations.
 */

const subt = (color, vari) => {
  let difference = color.filter(x => !vari.includes(x));

  return difference[0];
}

const mainFunc = (data, length) => {
  let color = ["R", "G", "B"];
  let variation = [];

  if (data.length === 0) {
    return false;
  }

  for (var i = 0; i < data.length; ++i) {
    for (var j = i + 1; j < data.length; ++j) {
      variation.push(data[i], data[j])
      let ret = subt(color, variation);
      data.splice(0, 1);
      data.splice(0, 1);
      data.splice(0, 0, ret);
      mainFunc(data, length - 1);
    }
  }
  return data;
}

// test
let val = ["R", "G", "B", "G", "B"];
console.log(mainFunc(val, val.length));
