/**
 * Company: Twitter.
 *
 * Implement an autocomplete system. That is, given a query string s and
 * a set of all possible query strings, return all strings in the set that
 * have s as prefix.
 *
 * For example, given the query string de an the set of strings [dog, deer, deal]
 * returns [deer, deal]
 *
 * Hint: Try preprocessing the dictionary into a more efficient data structures to
 * speed up queries.
 *
 * Youtube: https://www.youtube.com/watch?v=AXjmTQ8LEoI&t=1010s
 */
class TrieNode {
  constructor(parent) {
    this.parent = parent;
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('root');
  }

  init(words) {
    for (const word of words) {
      this.insert(word);
    }
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);

      if (current.children[char]) {
        if (i === word.length - 1) {
          current.endOfWord = true;
        } else {
          current = current.children[char];
        }
      } else {
        let newNode = new TrieNode(char);

        if (i === word.length - 1) {
          newNode.endOfWord = true;
        }

        current.children[char] = newNode;
        current = current.children[char];
      }
    }

    return this.root;
  }

  searchWithPrefixHelper(node, current, result) {
    if (node.endOfWord) {
      result.push(current.join(''));
    }

    const children = node.children;
    for (const key of Object.keys(children)) {
      this.searchWithPrefixHelper(children[key], [...current, key], result);
    }

    return result;
  }

  searchWithPrefix(prefix) {
    let current = this.root;
    let result = [];

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix.charAt(i);
      const children = current.children[char];

      if (children) {
        if (children.endOfWord) {
          result.push(prefix);
        }
        current = current.children[char];
      } else {
        console.log('Cannot find the result');
        return null;
      }
    }

    this.searchWithPrefixHelper(current, prefix.split(''), result);

    return result;
  }

  toString() {
    const queue = [this.root];
    while (queue.length) {
      const allChild = [];
      const node = queue.shift();
      const children = node.children;

      for (const key of Object.keys(children)) {
        queue.push(children[key]);
        allChild.push(`${key} is end of word ${children[key].endOfWord}`);
      }

      if (allChild.length) {
        console.log(node.parent + "'s children are " + allChild.join(', '));
      }
    }
  }
}

function autocomplete(words = [], prefix) {
  const trie = new Trie();
  trie.init(words);
  console.log(trie.searchWithPrefix(prefix));
}

autocomplete(['dog', 'deer', 'deal', 'cat', 'done', 'cow', 'bee', 'do'], 'do');
autocomplete(
  ['dog', 'deer', 'deal', 'cat', 'done', 'cow', 'bee', 'do', 'carb'],
  'ca'
);
