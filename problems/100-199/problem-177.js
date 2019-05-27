/**
 * Company: Snapchat.
 *
 * Given a string of digits, generate all possible valid IP address combinations.
 *
 * IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers
 * between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed,
 * except for 0 itself.
 *
 * For example, given "2542540123", you should return ['254.25.40.123', '254.254.0.123'].
 */
var restoreIpAddresses = function(s) {
  if (s.length < 3) return [];
  const result = [];
  const set = new Set();

  const isValid = function(snippet) {
    if (
      snippet.length > 3 ||
      snippet.length < 1 ||
      (snippet.length > 1 && snippet.charAt(0) === '0') ||
      parseInt(snippet) > 255
    )
      return false;
    return true;
  };

  const helper = function(s, current = [], snippets = 0) {
    if (snippets === 4 && s.length === 0) {
      if (!set.has(current.join('.'))) {
        result.push(current.join('.'));
        set.add(current.join('.'));
      }
      return result;
    } else if (snippets === 4 && s.length > 0) {
      return result;
    }

    for (let i = 1; i <= 3; i++) {
      const snippet = s.substring(0, i);
      if (isValid(snippet)) {
        helper(s.substring(i), [...current, snippet], snippets + 1);
      }
    }

    return result;
  };

  return helper(s);
};
