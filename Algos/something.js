function insertionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  for (let x = 1; x < arr.length; x++) {
    let temp = arr[x];
    for (let y = x - 1; y >= 0; y--) {
      if (arr[y] < arr[y + 1]) {
        arr[y] = arr[y + 1];
        arr[y] = temp;
      }
    }
  }
  return arr;
}

console.log(insertionSort([3, 5, 2, 1, 0]));
console.log(insertionSort([3, 0]));
console.log(insertionSort([0]));
console.log(insertionSort([]));
console.log(insertionSort([1, 2, 3, 4, 5]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([5, 4, 0, 2, 1]));