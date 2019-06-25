/**
 * Company: Dropbox.
 *
 * Given a list of words, determine whether the words can be chained to form a circle. A word X
 * can be placed in front of another word Y in a circle if the last character of X is same as
 * the first character of Y.
 *
 * For example, the words ['chair', 'height', 'racket', 'touch', 'tunic'] can form the following
 * circle: chair --> racket --> touch --> height --> tunic --> chair.
 */
const findCircularWords = function(words) {
  const map = {};

  const isValid = function(word1, word2) {
    if (!word1.length || !word2.length) return false;
    return word1.charAt(word1.length - 1) === word2.charAt(0);
  };

  const dfs = function(start, visited = {}, current = []) {
    for (const child of map[start]) {
      if (!visited[child]) {
        visited[child] = true;
        if (dfs(child, visited, [...current, child])) return true;
        visited[child] = false;
      } else if (current.length > 2 && current[0] === child) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && isValid(words[i], words[j])) {
        map[words[i]]
          ? map[words[i]].push(words[j])
          : (map[words[i]] = [words[j]]);
      }
    }
  }

  for (const word of words) {
    const visited = { word: true };
    if (dfs(word, visited)) return true;
  }

  return false;
};

console.log(findCircularWords(['chair', 'height', 'racket', 'touch', 'tunic']));
console.log(findCircularWords(['chair', 'height', 'racket', 'touch']));
