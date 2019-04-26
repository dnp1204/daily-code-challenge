/**
 * Company: Facebook.
 *
 * Given a start word, an end word, and a dictionary of valid words, find the
 * shortest transformation sequence from start to end such that only one letter
 * is changed at each step of the sequence, and each transformed word exists in
 * the dictionary. If there is no possible transformation, return null. Each word
 * in the dictionary have the same length as start and end and is lowercase.
 *
 * For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop",
 * "dat", "cat"}, return ["dog", "dot", "dat", "cat"].
 *
 * Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"},
 * return null as there is no possible transformation from dog to cat.
 *
 * Leetcode: https://leetcode.com/problems/word-ladder/ and https://leetcode.com/problems/word-ladder-ii/
 */
const { Graph } = require('../libraries/Graph');

var findLadders = function(beginWord, endWord, wordList) {
  const graph = new Graph();
  const newWordList = [beginWord, ...wordList];

  const isExist = wordList.find(word => word === endWord);
  if (!isExist) return 0;

  for (let i = 0; i < newWordList.length; i++) {
    graph.addVertex(newWordList[i]);
  }

  for (let i = 0; i < newWordList.length; i++) {
    const word1 = newWordList[i];

    for (let j = i + 1; j < newWordList.length; j++) {
      const word2 = newWordList[j];

      if (isValid(word1, word2)) {
        const node1 = graph.vertices[word1];
        const node2 = graph.vertices[word2];
        graph.addEdge(node1, node2, 1);
      }
    }
  }

  return graph.dijkstraAll(beginWord, endWord);
};

const isValid = function(word1, word2) {
  let index = 0;
  let count = 0;
  while (index < word1.length) {
    if (word1.charAt(index) !== word2.charAt(index)) count++;
    if (count > 1) return false;
    index++;
  }
  return true;
};

console.log(
  findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
);
console.log(findLadders('a', 'c', ['a', 'b', 'c']));
console.log(
  findLadders('lost', 'cost', ['most', 'fist', 'lost', 'cost', 'fish'])
);
console.log(
  findLadders('qa', 'sq', [
    'si',
    'go',
    'se',
    'cm',
    'so',
    'ph',
    'mt',
    'db',
    'mb',
    'sb',
    'kr',
    'ln',
    'tm',
    'le',
    'av',
    'sm',
    'ar',
    'ci',
    'ca',
    'br',
    'ti',
    'ba',
    'to',
    'ra',
    'fa',
    'yo',
    'ow',
    'sn',
    'ya',
    'cr',
    'po',
    'fe',
    'ho',
    'ma',
    're',
    'or',
    'rn',
    'au',
    'ur',
    'rh',
    'sr',
    'tc',
    'lt',
    'lo',
    'as',
    'fr',
    'nb',
    'yb',
    'if',
    'pb',
    'ge',
    'th',
    'pm',
    'rb',
    'sh',
    'co',
    'ga',
    'li',
    'ha',
    'hz',
    'no',
    'bi',
    'di',
    'hi',
    'qa',
    'pi',
    'os',
    'uh',
    'wm',
    'an',
    'me',
    'mo',
    'na',
    'la',
    'st',
    'er',
    'sc',
    'ne',
    'mn',
    'mi',
    'am',
    'ex',
    'pt',
    'io',
    'be',
    'fm',
    'ta',
    'tb',
    'ni',
    'mr',
    'pa',
    'he',
    'lr',
    'sq',
    'ye'
  ])
);
