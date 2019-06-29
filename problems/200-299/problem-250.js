/**
 * Company: Google.
 *
 * A cryptarithmetic puzzle is a mathematical game where the digits of some numbers
 * are represented by letters. Each letter represents a unique digit.
 *
 * For example, a puzzle of the form:
 *
 *   SEND
 * + MORE
 * --------
 *  MONEY
 *
 * may have the solution:
 *
 * {'S': 9, 'E': 5, 'N': 6, 'D': 7, 'M': 1, 'O', 0, 'R': 8, 'Y': 2}
 *
 * Given a three-word puzzle like the one above, create an algorithm that finds a solution.
 */
const cryptarithmetic = function(word1, word2, word3) {
  if (word1.length > word2.length) return cryptarithmetic(word2, word1, word3);

  const isNotNull = function(val) {
    return val || val === 0;
  };

  const calSumChar = function(digit1, digit2, rem) {
    const sum = digit1 + digit2 + rem;
    const k = sum % 10;
    return { k, rem: sum >= 10 ? 1 : 0 };
  };

  const isNotValidSum = function(char, index, map, set) {
    return (
      (isNotNull(map[char]) && map[char] !== index) ||
      (!isNotNull(map[char]) && set.has(index))
    );
  };

  const isValid = function(index1, index2, index3, remainder, map, set) {
    if (index1 < 0 && index2 < 0 && index3 < 0) return true;

    const char1 = word1.charAt(index1);
    const char2 = word2.charAt(index2);
    const char3 = word3.charAt(index3);

    // console.log('1', map, char1, char2, char3);

    if (index1 < 0 && index2 < 0) {
      if (isNotValidSum(char3, remainder, map, set)) return false;
      map[char3] = remainder;
      set.add(remainder);
      if (isValid(index1 - 1, index2 - 1, index3 - 1, 0, map, set)) {
        return true;
      }
    } else {
      if (isNotNull(map[char1]) && isNotNull(map[char2])) {
        const { k, rem } = calSumChar(map[char1], map[char2], remainder);
        if (isNotValidSum(char3, k, map, set)) return false;
        map[char3] = k;
        set.add(k);
        if (isValid(index1 - 1, index2 - 1, index3 - 1, rem, map, set)) {
          return true;
        }

        delete map[char3];
        set.delete(k);
      } else if (!isNotNull(map[char1] && !isNotNull(map[char2]))) {
        for (let i = 0; i <= 9; i++) {
          if (set.has(i)) continue;
          for (let j = 0; j <= 9; j++) {
            const { k, rem } = calSumChar(i, j, remainder);
            if (i === j || i === k || j === k || set.has(j)) continue;
            if (isNotValidSum(char3, k, map, set)) continue;

            const removeChar3 = isNotNull(map[char3]) ? false : true;

            map[char1] = i;
            map[char2] = j;
            map[char3] = k;

            set.add(i);
            set.add(j);
            set.add(k);

            if (isValid(index1 - 1, index2 - 1, index3 - 1, rem, map, set)) {
              return true;
            } else {
              delete map[char1];
              delete map[char2];

              set.delete(i);
              set.delete(j);

              if (removeChar3) {
                delete map[char3];
                set.delete(k);
              }
            }
          }
        }
      } else if (!isNotNull(map[char1])) {
        for (let i = 0; i <= 9; i++) {
          const { k, rem } = calSumChar(i, map[char2], remainder);
          const j = map[char2];
          if (i === j || i === k || j === k || set.has(i)) continue;
          if (isNotValidSum(char3, k, map, set)) continue;

          const removeChar3 = isNotNull(map[char3]) ? false : true;

          map[char1] = i;
          map[char3] = k;

          set.add(i);
          set.add(k);

          if (isValid(index1 - 1, index2 - 1, index3 - 1, rem, map, set)) {
            return true;
          } else {
            delete map[char1];
            set.delete(i);

            if (removeChar3) {
              delete map[char3];
              set.delete(k);
            }
          }
        }
      } else {
        for (let j = 0; j <= 9; j++) {
          const { k, rem } = calSumChar(j, map[char1], remainder);
          const i = map[char2];

          if (i === j || i === k || j === k || set.has(j)) continue;
          if (isNotValidSum(char3, k, map, set)) continue;

          const removeChar3 = isNotNull(map[char3]) ? false : true;

          map[char2] = j;
          map[char3] = k;

          set.add(j);
          set.add(k);

          if (isValid(index1 - 1, index2 - 1, index3 - 1, rem, map, set)) {
            return true;
          } else {
            delete map[char2];
            set.delete(j);

            if (removeChar3) {
              delete map[char3];
              set.delete(k);
            }
          }
        }
      }
    }

    return false;
  };

  let index1 = word1.length - 1;
  let index2 = word2.length - 1;
  let index3 = word3.length - 1;

  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const map = {};
      const set = new Set();

      const char1 = word1.charAt(index1);
      const char2 = word2.charAt(index2);
      const char3 = word3.charAt(index3);
      const k = (i + j) % 10;
      const remainder = i + j >= 10 ? 1 : 0;

      if (i === j || k === i || k === j) continue;

      map[char1] = i;
      map[char2] = j;
      map[char3] = k;

      set.add(i);
      set.add(j);
      set.add(k);

      if (isValid(index1 - 1, index2 - 1, index3 - 1, remainder, map, set)) {
        return map;
      }
    }
  }

  return null;
};

console.log(cryptarithmetic('a', 'b', 'c'));
console.log(cryptarithmetic('a', 'b', 'cd'));
console.log(cryptarithmetic('send', 'more', 'money'));
