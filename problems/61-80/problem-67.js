/**
 * Company: Google.
 *
 * Given an integer n and a list of integers l, write a function that
 * randomly generates a number from 0 to n-1 that isn't in l (uniform).
 */
const getRandNotInList = (n, list) => {
  const picks = [];
  const getPickable = () => {
    let i = 0;
    let dir = Math.sign(n);
    list = new Set(list);

    while (i !== n) {
      if (!list.has(i)) {
        picks.push(i);
      }
      i += dir;
    }
  };

  n = Math.floor(n);
  if (n === 0) {
    return list.includes(0) ? undefined : 0;
  }

  getPickable();

  // (| 0) same as Math.floor (only for positive ints).
  return picks[(Math.random() * picks.length) | 0];
};

for (let i = 0; i < 20; i++) {
  console.log(getRandNotInList(-10, [1, 4, 5, 6]));
}
