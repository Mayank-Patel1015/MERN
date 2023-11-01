/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) {
  let ans, sumR = 0, sumL = 0
  let len = sqrMatrix[0].length
  for (let i = 0; i < len; i++) {
    sumR += sqrMatrix[i][i]
    sumL += sqrMatrix[i][len - 1 - i]
  }
  ans = sumL - sumR
  return Math.abs(ans)
}

// declare variable for the answer, sum right diagonal, and sum left diagonal (initiate at 0)
// for loop for array length using incrementer i (+1 each iteration)
// grab item sqrMatrix[i][i] (add to sum right diagonal)
// grab item sqrMatrix[i][len of matrix - i - 1] (add to sum left diagonal)
// find difference from the two sums and store in answer
// return answer

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))

function valueMealDiagonalDifference(sqrMatrix) {

  let left = 0, right = 0

  let lenOfArr = sqrMatrix[0].length
  for (let i = 0; i < lenOfArr; i++) {
    left += sqrMatrix[i][i]
    right += sqrMatrix[i][lenOfArr - 1 - i]
  }

  return (left - right < 0 ? right - left : left - right)
}

console.log(valueMealDiagonalDifference(squareMatrix1))
console.log(valueMealDiagonalDifference(squareMatrix2))