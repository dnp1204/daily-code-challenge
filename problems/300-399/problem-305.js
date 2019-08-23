/**
 * Company: Amazon.
 *
 * Given a linked list, remove all consecutive nodes that sum to zero. Print out the remaining nodes.
 *
 * For example, suppose you are given the input 3 -> 4 -> -7 -> 5 -> -6 -> 6. In this case, you should
 * first remove 3 -> 4 -> -7, then -6 -> 6, leaving only 5.
 */
// TODO:
const { LinkedList } = require('../../libraries/LinkedList');
const list = new LinkedList();
list.insert(3);
list.insert(4);
list.insert(-7);
list.insert(5);
list.insert(-6);
list.insert(6);
