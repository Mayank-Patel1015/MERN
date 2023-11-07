/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/

// create a function called twoSum that takes in an array and a target value then returns two ints
//  for loop for length of array starting incrementer "i" at 0 i++
//    for loop for length of array starting incrementer "j" at i+1 j++
//      if target equals value of index i of array plus value of index j of array 
//        return array with i and j

arr1 = [2, 11, 7, 15]
target1 = 9

arr2 = [3, 2, 4]
target2 = 6

arr3 = [3, 3]
target3 = 6

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target == arr[i] + arr[j]) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum(arr1, target1))
console.log(twoSum(arr2, target2))
console.log(twoSum(arr3, target3))