/**
 * Company: Stripe.
 *
 * Write a function to flatten a nested dictionary. Namespace the keys with a period.
 *
 * For example, given the following dictionary:
 * {
 *  "key": 3,
 *  "foo": {
 *      "a": 5,
 *      "bar": {
 *          "baz": 8
 *      }
 *   }
 * }
 * it should become:
 *
 * {
 *    "key": 3,
 *    "foo.a": 5,
 *    "foo.bar.baz": 8
 * }
 *
 * You can assume keys do not contain dots in them, i.e. no clobbering will occur.
 */
const flatten = function(object) {
  const result = {};

  const helper = function(object, key) {
    if (typeof object !== 'object') {
      result[key] = object;
      return result;
    }

    for (const k of Object.keys(object)) {
      helper(object[k], `${key}.${k}`);
    }

    return result;
  };

  for (const k of Object.keys(object)) {
    helper(object[k], k);
  }

  return result;
};

const test = {
  key: 3,
  foo: {
    a: 5,
    bar: {
      baz: 8
    }
  }
};

console.log(flatten(test));
