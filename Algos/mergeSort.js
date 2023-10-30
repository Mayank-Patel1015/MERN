var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
function mergeSort(arr) {
  if (arr.length == 1) return arr

  midPoint = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, midPoint)
  let rightArr = arr.slice(midPoint, arr.length)

  leftArr = mergeSort(leftArr)
  rightArr = mergeSort(rightArr)
  return mergeSortedArrays(leftArr, rightArr)
}

console.log(mergeSort(testArr))

var case1 = [88]
var case2 = [22]
function mergeSortedArrays(arr1, arr2) {
  let sortedArray = [];
  let leftIDX = 0;
  let rightIDX = 0;
  while (leftIDX < arr1.length || rightIDX < arr2.length) {
    if (arr1[leftIDX] < arr2[rightIDX] || arr2[rightIDX] == undefined) {
      sortedArray.push(arr1[leftIDX])
      leftIDX++
    }
    else {
      sortedArray.push(arr2[rightIDX])
      rightIDX++
    }
  }
  return sortedArray
}

console.log(mergeSortedArrays(case1, case2))