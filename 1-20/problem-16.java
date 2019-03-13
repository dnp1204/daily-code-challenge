/**
 * Company: Microsoft.
 *
 * Compute the running median of a sequence of numbers. That
 * is, given a stream of numbers, print out the median of the
 * list so far on each new element.
 *
 * Recall that the median of an even-numbered list is the average
 * of the two middle numbers.
 *
 * For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your
 * algorithm should print out:
 * 2
 * 1.5
 * 2
 * 3.5
 * 2
 * 2
 * 2
 *
 * Leetcode: https://leetcode.com/problems/find-median-from-data-stream/
 */
class MedianFinder {
  private PriorityQueue<Integer> small;
  private PriorityQueue<Integer> large;
  private boolean even;
  
  public MedianFinder() {
      small = new PriorityQueue<>(Collections.reverseOrder());
      large = new PriorityQueue<>();
      even = true;
  }
  
  public void addNum(int num) {
     if (even) {
          large.offer(num);
          small.offer(large.poll());
      } else {
          small.offer(num);
          large.offer(small.poll());
      }
      even = !even;
  }
  
  public double findMedian() {
      if (even)
          return (small.peek() + large.peek()) / 2.0;
      else
          return small.peek();
  }
}
