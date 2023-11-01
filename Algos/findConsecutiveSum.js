/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
  [2, 5, 3, 6],
  [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:




// initiate variable currentArray to empty array
// initiate a variable sum to carry the sum of the current array (start at 0)
// initiate a answer variable (empty 2d array)

// for loop over the length of the array starting at index 0    (incrementer i + 1)
//   for loop over the length of the array starting at index i  (incrementer j + 1)
//     if target value = sum
//       answer += currentArray
//     add the current arr[j] element to sum and currentArray
//   reset currentArray and sum for next loop of i
// return answer


function valueMealFindConsecutiveSum(k, arr) {
  let sum = 0
  let curArr = []
  let answerArr = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (k == sum) {
        answerArr.push([...curArr])
      }
      curArr.push(arr[j])
      sum += arr[j]
      if (sum > k) {
        break
      }
    }
    curArr = []
    sum = 0
  }
  return answerArr
}

console.log(valueMealFindConsecutiveSum(k, arr))



function findConsecutiveSum(k, arr) {
  let ansArr = []
  let arrSum = 0
  let returnAns = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      ansArr.push(arr[j])
      arrSum += arr[j]
      if (k === arrSum) {
        returnAns.push([...ansArr])
      } else if (arrSum > k) {
        break
      }
    }
    ansArr = []
    arrSum = 0
  }
  return returnAns
}

console.log(findConsecutiveSum(k, arr))
