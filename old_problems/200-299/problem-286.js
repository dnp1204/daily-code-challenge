/**
 * Company: VMware.
 *
 * The skyline of a city is composed of several buildings of various widths and heights, possibly
 * overlapping one another when viewed from a distance. We can represent the buildings using an
 * array of (left, right, height) tuples, which tell us where on an imaginary x-axis a building
 * begins and ends, and how tall it is. The skyline itself can be described by a list of (x, height)
 * tuples, giving the locations at which the height visible to a distant observer changes, and each
 * new height.
 *
 * Given an array of buildings as described above, create a function that returns the skyline.
 *
 * Leetcode: https://leetcode.com/problems/the-skyline-problem/
 */
var getSkyline = function(buildings) {
  const buildingPoints = [];
  const ans = [];

  for (const building of buildings) {
    const [start, end, height] = building;
    buildingPoints.push([start, height, true]);
    buildingPoints.push([end, height, false]);
  }

  buildingPoints.sort((a, b) => {
    if (a[0] === b[0]) {
      const heightA = a[2] ? -a[1] : a[1];
      const heightB = b[2] ? -b[1] : b[1];
      return heightA - heightB;
    }
    return a[0] - b[0];
  });

  const map = new TreeMap();
  map.set(0, 1);
  let previousMax = 0;

  for (const point of buildingPoints) {
    if (point[2]) {
      if (map.get(point[1])) {
        map.set(point[1], map.get(point[1]) + 1);
      } else {
        map.set(point[1], 1);
      }
    } else {
      if (map.get(point[1]) > 1) {
        map.set(point[1], map.get(point[1]) - 1);
      } else {
        map.remove(point[1]);
      }
    }

    const currentMax = map.getMaxKey();
    if (previousMax !== currentMax) {
      ans.push([point[0], currentMax]);
      previousMax = currentMax;
    }
  }

  return ans;
};

function TreeMap() {
  var root = null;
  var keyType = void 0;
  var length = 0;

  return {
    each: each,
    set: set,
    get: get,
    getTree: getTree,
    getLength: getLength,
    getMaxKey: getMaxKey,
    getMinKey: getMinKey,
    remove: remove
  };

  function checkKey(key, checkKeyType) {
    var localKeyType = typeof key;

    if (
      localKeyType !== 'number' &&
      localKeyType !== 'string' &&
      localKeyType !== 'boolean'
    ) {
      throw new Error("'key' must be a number, a string or a boolean");
    }

    if (checkKeyType === true && localKeyType !== keyType) {
      throw new Error('All keys must be of the same type');
    }

    return localKeyType;
  }

  function call(callback) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (typeof callback === 'function') {
      callback.apply(void 0, args);
    }
  }

  function getTree() {
    return root;
  }

  function getLength() {
    return length;
  }

  function each(callback) {
    internalEach(root, callback);
  }

  function internalEach(node, callback, internalCallback) {
    if (node === null) {
      return call(internalCallback);
    }

    internalEach(node.left, callback, function() {
      call(callback, node.value, node.key);

      internalEach(node.right, callback, function() {
        call(internalCallback);
      });
    });
  }

  function get(key) {
    checkKey(key);

    return internalGet(key, root);
  }

  function internalGet(key, node) {
    if (node === null) {
      return void 0;
    }

    if (key < node.key) {
      return internalGet(key, node.left);
    } else if (key > node.key) {
      return internalGet(key, node.right);
    } else {
      return node.value;
    }
  }

  function set(key, value) {
    if (root === null) {
      keyType = checkKey(key);
    } else {
      checkKey(key, true);
    }

    root = internalSet(key, value, root);
  }

  function internalSet(key, value, node) {
    if (node === null) {
      length++;

      return {
        key: key,
        value: value,
        left: null,
        right: null
      };
    }

    if (key < node.key) {
      node.left = internalSet(key, value, node.left);
    } else if (key > node.key) {
      node.right = internalSet(key, value, node.right);
    } else {
      node.value = value;
    }

    return node;
  }

  function getMaxKey() {
    var maxNode = getMaxNode(root);

    if (maxNode !== null) {
      return maxNode.key;
    }

    return maxNode;
  }

  function getMinKey() {
    var minNode = getMinNode(root);

    if (minNode !== null) {
      return minNode.key;
    }

    return minNode;
  }

  function getMaxNode(node) {
    while (node !== null && node.right !== null) {
      node = node.right;
    }

    return node;
  }

  function getMinNode(node) {
    while (node !== null && node.left !== null) {
      node = node.left;
    }

    return node;
  }

  function remove(key) {
    checkKey(key);

    root = internalRemove(key, root);
  }

  function internalRemove(key, node) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = internalRemove(key, node.left);
    } else if (key > node.key) {
      node.right = internalRemove(key, node.right);
    } else {
      if (node.left !== null && node.right !== null) {
        var maxNode = getMaxNode(node.left);

        var maxNodeKey = maxNode.key;
        var maxNodeValue = maxNode.value;

        maxNode.key = node.key;
        maxNode.value = node.value;
        node.key = maxNodeKey;
        node.value = maxNodeValue;

        node.left = internalRemove(key, node.left);
      } else if (node.left !== null) {
        length--;
        return node.left;
      } else if (node.right !== null) {
        length--;
        return node.right;
      } else {
        length--;
        return null;
      }
    }

    return node;
  }
}
