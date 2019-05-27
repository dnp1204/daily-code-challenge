/**
 * Company: Microsoft.
 *
 * Compute the running median of a sequence of numbers. That is, given a stream
 * of numbers, print out the median of the list so far on each new element.
 *
 * Recall that the median of an even-numbered list is the average of the two
 * middle numbers.
 *
 * For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should
 * print out: 2 1.5 2 3.5 2 2 2
 *
 * Leetcode: https://leetcode.com/problems/find-median-from-data-stream/
 * Youtube:
 * https://www.youtube.com/watch?v=1CxyVdA_654&feature=youtu.be&app=desktop
 */
class MedianFinder {
  constructor() {
    this.small = new PriorityQueue(Collections.reverseOrder());
    this.large = new PriorityQueue();
    this.even = true;
  }

  addNum(num) {
    if (this.even) {
      this.large.offer(num);
      this.small.offer(this.large.poll());
    } else {
      this.small.offer(num);
      this.large.offer(this.small.poll());
    }
    this.even = !this.even;
  }

  findMedian() {
    if (this.even) return (this.small.peek() + this.large.peek()) / 2.0;
    else return this.small.peek();
  }
}
