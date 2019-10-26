/**
 * Company: Facebook.
 *
 * Given an unordered list of flights taken by someone, each represented
 * as (origin, destination) pairs, and a starting airport, compute the
 * person's itinerary. If no such itinerary exists, return null. If there
 * are multiple possible itineraries, return the lexicographically smallest
 * one. All flights must be used in the itinerary.
 *
 * For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'),
 * ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should
 * return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
 *
 * Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting
 * airport 'COM', you should return null.
 *
 * Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')]
 * and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C']
 * even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However,
 * the first one is lexicographically smaller.
 *
 * Leetcode: https://leetcode.com/problems/reconstruct-itinerary/
 */
var findItinerary = function(tickets) {
  if (!tickets.length) return [];
  const map = {};
  const visited = {};
  let result = [];

  for (const ticket of tickets) {
    if (!map[ticket[0]]) map[ticket[0]] = [];
    map[ticket[0]].push(ticket[1]);
  }

  const helper = function(origin, n = 0, path = []) {
    if (n > tickets.length) return result;
    if (n === tickets.length) {
      path.push(origin);
      if (!result.length) {
        result = path;
      } else {
        for (let i = 0; i < path.length; i++) {
          if (result[i] > path[i]) {
            result = path;
            break;
          }
        }
      }
      return result;
    }

    const destinations = map[origin];
    if (destinations) {
      for (const destination of destinations) {
        if (!visited[origin + ' ' + destination]) {
          visited[origin + ' ' + destination] = true;
          helper(destination, n + 1, [...path, origin]);
        }
        visited[origin + ' ' + destination] = false;
      }
    }

    return result;
  };

  return helper('JFK');
};

console.log(
  findItinerary([
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO']
  ])
);
console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO']
  ])
);
