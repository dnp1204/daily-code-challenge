/**
 * Company: Palantir.
 *
 * Write an algorithm to justify text. Given a sequence of words and
 * an integer line length k, return a list of strings which represents
 * each line, fully justified.
 *
 * More specifically, you should have as many words as possible in each
 * line. There should be at least one space between each word. Pad extra
 * spaces when necessary so that each line has exactly length k. Spaces
 * should be distributed as equally as possible, with the extra spaces,
 * if any, distributed starting from the left.
 *
 * If you can only fit one word on a line, then you should pad the
 * right-hand side with spaces.
 *
 * Each word is guaranteed not to be longer than k.
 *
 * For example, given the list of words ["the", "quick", "brown", "fox",
 * "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return
 * the following:
 * ["the  quick brown", # 1 extra space on the left
 * "fox  jumps  over", # 2 extra spaces distributed evenly
 * "the   lazy   dog"] # 4 extra spaces distributed evenly
 *
 * Leetcode: https://leetcode.com/problems/text-justification/
 */
var fullJustify = function(words, maxWidth) {
  let res = [],
    current = [],
    numOfLetters = 0;
  words.forEach(word => {
    if (numOfLetters + word.length + current.length > maxWidth) {
      const remainingSpaces = maxWidth - numOfLetters;
      if (current.length === 1) {
        for (let i = 0; i < remainingSpaces; i++) {
          current[0] += ' ';
        }
      } else {
        for (let i = 0; i < remainingSpaces; i++) {
          let index = i % (current.length - 1);
          if (index < 0) {
            index = 1;
          }
          current[index] += ' ';
        }
      }
      res.push(current.join(''));
      current = [];
      numOfLetters = 0;
    }
    current.push(word);
    numOfLetters += word.length;
  });

  if (current.length) {
    let lastLine = current.join(' ');
    for (let i = lastLine.length; i < maxWidth; i++) {
      lastLine += ' ';
    }
    res.push(lastLine);
  }

  return res;
};
