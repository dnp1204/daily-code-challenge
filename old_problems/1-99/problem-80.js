/**
 * Company: Facebook.
 *
 * Given a function f, and N return a debounced f of N milliseconds.
 * That is, as long as the debounced f continues to be invoked, f itself
 * will not be called for N milliseconds.
 */
function debounce(func, interval) {
  var timeout;
  return function() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval || 200);
  };
}
