const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */


// let area
// let height, length
// loop through the heights array
//   loop through curr index to heights array end
//     calculate area
//     if area less then new area change
// return area

function containerWithMostWater(heights) {
  let maxArea = 0
  let height = 0
  let length = 0
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      height = Math.min(heights[i], heights[j])
      length = j - i
      let currArea = height * length
      if (currArea > maxArea) {
        maxArea = currArea
      }
    }
  }
  return maxArea
}


function gigaBrainContainerWithMostWater(heights) {
  let left = 0
  let right = heights.length - 1
  let maxArea = 0
  while (left < right) {
    area = (Math.min(heights[left], heights[right]) * (right - left))
    maxArea = Math.max(area, maxArea)
    if (heights[left] > heights[right]) {
      right--
    } else {
      left++
    }
  }
  return maxArea
}

// console.log(containerWithMostWater(heights1))
// console.log(containerWithMostWater(heights2))
// console.log(containerWithMostWater(heights3))
// console.log(containerWithMostWater(heights4))

console.log(gigaBrainContainerWithMostWater(heights1))
console.log(gigaBrainContainerWithMostWater(heights2))
console.log(gigaBrainContainerWithMostWater(heights3))
console.log(gigaBrainContainerWithMostWater(heights4))
