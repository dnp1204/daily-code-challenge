/**
 * Company: Google.
 *
 * Implement an LFU (Least Frequently Used) cache. It should be able to be initialized
 * with a cache size n, and contain the following methods:
 *
 * set(key, value): sets key to value. If there are already n items in the cache and
 * we are adding a new item, then it should also remove the least frequently used item.
 * If there is a tie, then the least recently used key should be removed.
 * get(key): gets the value at key. If no such key exists, return null.
 *
 * Each operation should run in O(1) time.
 * https://leetcode.com/problems/lfu-cache/discuss/94521/JAVA-O(1)-very-easy-solution-using-3-HashMaps-and-LinkedHashSet
 * https://www.youtube.com/watch?v=uL0xP57negc
 */
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.vals = {};
  this.counts = {};
  this.lists = {};
  this.min = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.vals[key]) return -1;
  this.update(key);
  return this.vals[key];
};

LFUCache.prototype.update = function(key) {
  const cnt = this.counts[key];
  this.counts[key] = cnt + 1;
  this.lists[cnt].delete(key);

  if (cnt === this.min && this.lists[cnt].size === 0) {
    this.min++;
  }

  this.addToList(cnt + 1, key);
};

LFUCache.prototype.addToList = function(cnt, key) {
  if (!this.lists[cnt]) {
    this.lists[cnt] = new Set();
  }
  this.lists[cnt].add(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity <= 0) return;

  if (this.vals[key]) {
    this.vals[key] = value;
    this.update(key);
    return;
  }

  if (Object.keys(this.vals).length >= this.capacity) this.evict();

  this.vals[key] = value;
  this.counts[key] = 1;
  this.addToList(1, key);
  this.min = 1;
};

LFUCache.prototype.evict = function() {
  const key = this.lists[this.min].values().next().value;
  this.lists[this.min].delete(key);
  delete this.vals[key];
  delete this.counts[key];
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
