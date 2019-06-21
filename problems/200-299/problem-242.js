/**
 * Company: Twitter.
 *
 * You are given an array of length 24, where each element represents the number of
 * new subscribers during the corresponding hour. Implement a data structure that
 * efficiently supports the following:
 *
 * update(hour: int, value: int): Increment the element at index hour by value.
 * query(start: int, end: int): Retrieve the number of subscribers that have signed
 * up between start and end (inclusive).
 *
 * You can assume that all values get cleared at the end of the day, and that you will
 * not be asked for start and end values that wrap around midnight.
 */
class HourlySubscribers {
  constructor() {
    this.subscribers = Array(24).fill(0);
  }

  update(hour, value) {
    this.subscribers[hour] += value;
  }

  query(start, end) {
    return this.subscribers.slice(start, end).reduce((acc, ele) => acc + ele);
  }
}
