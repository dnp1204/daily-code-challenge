/**
 * Company: Riot Games.
 *
 * Design and implement a HitCounter class that keeps track of requests (or hits).
 * It should support the following operations:
 * record(timestamp): records a hit that happened at timestamp
 * total(): returns the total number of hits recorded
 * range(lower, upper): returns the number of hits that occurred between timestamps
 * lower and upper (inclusive)
 *
 * Follow-up: What if our system has limited memory?
 */
// 5 minutes = 300 seconds
const times = Array(300);
const hits = Array(300);

const record = function(timestamp) {
  const index = timestamp % 300;
  if (times[index] !== timestamp) {
    times[index] = timestamp;
    hits[index] = 1;
  } else {
    hits[index]++;
  }
};

const total = function(timestamp) {
  let res = 0;
  for (let i = 0; i < 300; i++) {
    if (timestamp - times[i] < 300) {
      res += hits[i];
    }
  }
  return res;
};
