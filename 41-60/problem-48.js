/**
 * Company: Microsoft.
 *
 * Using a read7() method that returns 7 characters from a file,
 * implement readN(n) which reads n characters.
 *
 * For example, given a file with the content “Hello world”,
 * three read7() returns “Hello w”, “orld” and then “”.
 */
function readN(content, n) {
  let result = '';
  let nextContent = read7();
  if (result.length + nextContent.length <= n && nextContent) {
    result += nextContent;
    nextContent = read7();
  }

  if (nextContent) {
    let nextLength = n - nextContent.length;
    result += content.substring(result.length - 1, nextLength);
  }

  return result;
}
