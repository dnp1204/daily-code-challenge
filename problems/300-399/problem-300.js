/**
 * Company:  Uber.
 *
 * On election day, a voting machine writes data in the form (voter_id, candidate_id) to a text file.
 * Write a program that reads this file as a stream and returns the top 3 candidates at any given time.
 * If you find a voter voting more than once, report this as fraud.
 */
const fs = require('fs');
const PriorityQueue = require('../../libraries/PriorityQueue');

const getTop3Candidates = (fileName, nthTop) => {
  const queue = new PriorityQueue([], (a, b) => a.count < b.count);
  const counter = new Map();
  const set = new Set();

  const stream = fs.createReadStream(fileName);
  fs.on('data', chunk => {
    const { voterId, candidateId } = chunk;
    if (set.has(voterId)) {
      console.log(`${voterId} already voted`);
    } else if (counter.has(candidateId)) {
      counter.set(candidateId, counter.get(candidateId) + 1);
    } else if (!counter.has(candidateId)) {
      counter.set(candidateId, 1);
    }

    set.add(voterId);
    queue.push({ candidateId, count: counter.get(candidateId) });
    if (queue.length > nthTop) {
      queue.pop();
    }
    console.log(`Top ${nthTop} current candidates`);
    console.log(queue.data);
  }).on('end', () => {
    console.log(object);
  });
};
