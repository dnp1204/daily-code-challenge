const PriorityQueue = require('./PriorityQueue');

class Node {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Vertex {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }

  addNeighbor(node, weight) {
    const isExisted = this.neighbors.find(element => {
      if (element.val === node.val) {
        console.log('Updated weight for duplicated node');
        element.weight = weight;
        return true;
      }

      return false;
    });

    if (!isExisted) {
      const neighbor = new Node(node, weight);
      this.neighbors.push(neighbor);
    }
  }
}

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(val) {
    let node = null;
    if (!this.vertices[val]) {
      node = new Vertex(val);
      this.vertices[val] = node;
    } else {
      node = this.vertices[val];
    }
    return node;
  }

  addEdge(node1, node2, weight = 0, directed = false) {
    if (!node1 || !node2 || !node1.val || !node2.val)
      throw new Error('Invalid graph node');
    if (directed) {
      node1.addNeighbor(node2, weight);
    } else {
      node1.addNeighbor(node2, weight);
      node2.addNeighbor(node1, weight);
    }
  }

  dijkstraAllHelper(map, key, path, result) {
    if (!map[key]) {
      if (path.length > 1) {
        const newPath = path.reverse();
        result.push(newPath);
      }
      return result;
    }

    const iterator = map[key][Symbol.iterator]();
    let element = iterator.next();
    while (!element.done) {
      this.dijkstraAllHelper(
        map,
        element.value,
        [...path, element.value],
        result
      );
      element = iterator.next();
    }

    return result;
  }

  dijkstraAll(start, end) {
    const nodes = new PriorityQueue(
      [],
      (node1, node2) => node1.distance - node2.distance
    );
    const previous = {};
    const distances = {};

    for (const key of Object.keys(this.vertices)) {
      previous[key] = null;
      if (key === start) {
        nodes.push({ val: key, distance: 0 });
        distances[key] = 0;
      } else {
        nodes.push({ val: key, distance: Infinity });
        distances[key] = Infinity;
      }
    }

    while (nodes.data.length) {
      const smallest = nodes.pop();
      const node = this.vertices[smallest.val];

      if (smallest.val === end && distances[end] !== Infinity) {
        continue;
      } else {
        if (smallest && distances[smallest.val] !== Infinity) {
          for (const neighbor of node.neighbors) {
            const val = neighbor.node.val;
            const candidate = distances[smallest.val] + neighbor.weight;

            if (candidate < distances[val]) {
              previous[val] = new Set([smallest.val]);
              distances[val] = candidate;
              nodes.push({ val, distance: candidate });
            } else if (candidate === distances[val]) {
              previous[val].add(smallest.val);
            }
          }
        }
      }
    }

    return this.dijkstraAllHelper(previous, end, [end], []);
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue(
      [],
      (node1, node2) => node1.distance - node2.distance
    );
    const previous = {};
    const distances = {};

    for (const key of Object.keys(this.vertices)) {
      previous[key] = null;
      if (key === start) {
        nodes.push({ val: key, distance: 0 });
        distances[key] = 0;
      } else {
        nodes.push({ val: key, distance: Infinity });
        distances[key] = Infinity;
      }
    }

    while (nodes.data.length) {
      const path = [];
      const smallest = nodes.pop();
      const node = this.vertices[smallest.val];

      if (smallest.val === end && distances[end] !== Infinity) {
        let current = previous[end];
        path.push(end);
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }
        path.push(start);
        return path.reverse();
      } else {
        if (smallest && distances[smallest.val] !== Infinity) {
          for (const neighbor of node.neighbors) {
            const val = neighbor.node.val;
            const candidate = distances[smallest.val] + neighbor.weight;

            if (candidate < distances[val]) {
              previous[val] = smallest.val;
              distances[val] = candidate;
              nodes.push({ val, distance: candidate });
            }
          }
        }
      }
    }

    return null;
  }

  toString() {
    let str = '';
    for (const key of Object.keys(this.vertices)) {
      const neighbors = [];
      for (const node of this.vertices[key]['neighbors']) {
        neighbors.push(node.node.val);
      }
      str = `${str}Vertex: ${key} with neighbors [${neighbors.join(', ')}]\n`;
    }
    return str;
  }
}

module.exports = { Graph };
