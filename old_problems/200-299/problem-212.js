/**
 * Company: Dropbox.
 *
 * Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ...,
 * "AA", "AB", ..., "ZZ", "AAA", "AAB", ....
 *
 * Given a column number, return its alphabetical column id. For example, given 1, return
 * "A". Given 27, return "AA".
 *
 * Leetcode: https://leetcode.com/problems/excel-sheet-column-title/
 */
var convertToTitle = function(n) {
  const result = [];
  const base = 64;

  while (n > 26) {
    let remainder = n % 26;
    if (remainder === 0) {
      result.push(String.fromCharCode(base + 26));
      remainder = 26;
    } else {
      result.push(String.fromCharCode(base + remainder));
    }
    n = Math.floor((n - remainder) / 26);
  }

  result.push(String.fromCharCode(base + n));

  return result.reverse().join('');
};
