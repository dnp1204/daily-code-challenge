/**
 * Company: Square.
 *
 * Given a list of words, return the shortest unique prefix of each word. For example,
 * given the list:
 *
 * dog
 * cat
 * apple
 * apricot
 * fish
 *
 * Return the list:
 *
 * d
 * c
 * app
 * apr
 * f
 */
const { Trie } = require('../libraries/Trie');

const shortestUniquePrefix = function(words) {
  const trie = new Trie();
  trie.init(words);
  return trie.searchUniquePrefix();
};

console.log(shortestUniquePrefix(['dog', 'cat', 'apple', 'apricot', 'fish']));
console.log(shortestUniquePrefix(['zebra', 'dog', 'duck', 'dove']));
console.log(shortestUniquePrefix(['geeksgeeks', 'geeksquiz', 'geeksforgeeks']));
