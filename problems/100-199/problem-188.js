/**
 * Company: Google.
 *
 * What will this code print out?
 *
 * def make_functions():
 *  flist = []
 * for i in [1, 2, 3]:
 *  def print_i():
 *    print(i)
 *  flist.append(print_i)
 * return flist
 *
 * functions = make_functions()
 * for f in functions:
 *  f()
 *
 * How can we make it print out what we apparently want?
 */
function makeFunctions() {
  flist = [];
  for (let i = 1; i <= 3; i++) {
    function printI() {
      console.log(i);
    }
    flist.push(printI);
  }
  return flist;
}

const functions = makeFunctions();
for (f of functions) {
  f();
}
