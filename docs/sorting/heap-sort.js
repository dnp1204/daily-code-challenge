function heapSort(arr) {
  const N = arr.length;
  if (!N) return arr;

  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  const heapify = (arr, size, index) => {
    let largest = index;
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;

    if (leftIndex < size && arr[leftIndex] > arr[largest]) {
      largest = leftIndex;
    }

    if (rightIndex < size && arr[rightIndex] > arr[largest]) {
      largest = rightIndex;
    }

    if (largest !== index) {
      swap(arr, index, largest);
      heapify(arr, size, largest);
    }
  };

  // Build heap
  for (let i = Math.floor(N / 2); i >= 0; i--) {
    heapify(arr, N, i);
  }

  // Extract max element from heap
  for (let i = N - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

const sorted = heapSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
console.log(sorted);
