/**
 * Company: Google.
 *
 * Given an array of strictly the characters 'R', 'G', and 'B',
 * segregate the values of the array so that all the Rs come
 * first, the Gs come second, and the Bs come last. You can only
 * swap elements of the array.
 *
 * Do this in linear time and in-place.
 *
 * For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'],
 * it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
 */
// TODO:
function segregate(letters) {
  let pointer = 0;

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === 'R') {
      if (pointer !== i) {
        const temp = letters[pointer];
        letters[pointer] = letters[i];
        letters[i] = temp;
      }
      pointer++;
    }
  }

  for (let i = pointer; i < letters.length; i++) {
    if (letters[i] === 'G') {
      if (pointer !== i) {
        const temp = letters[pointer];
        letters[pointer] = letters[i];
        letters[i] = temp;
      }
      pointer++;
    }
  }
}

segregate(['G', 'B', 'R', 'R', 'B', 'R', 'G']);
