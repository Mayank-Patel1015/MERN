/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [["name", "Pizza"], ["calories", 9001]];

const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 99,
};
const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 99],
];

// create a function called weTheBest that takes in paramaters obj1 and returns a 2d array
//  declare answer array (intiate to empty array)
//    do a for loop for each key in obj1
//      push an array containing the key and value of key into answer array ([key, value])
//  return answer


function weTheBest(obj1) {
  let answer = []
  for (let key in obj1) {
    answer.push([key, obj1[key]])
  }
  return answer
}
// console.log(weTheBest(obj1))
// console.log(weTheBest(obj2))

// join objects
obj1.__proto__ = obj2;

function weTheBestBonus(obj) {
  let extra = obj.__proto__
  let answer = []
  for (let key in obj) {
    answer.push([key, obj[key]])
  }
  for (let key in extra) {
    answer.pop()
  }
  return answer
}
console.log(weTheBestBonus(obj1))
console.log(weTheBestBonus(obj2))
























// function entries(obj) {

//   let something = obj.__proto__
//   let answer = []
//   for (let key in obj) {
//     if (!Object.keys(something).includes(key)) {
//       answer.push([key, obj1[key]])
//     }
//   }
//   return answer
// }

// console.log(entries(obj1));
// console.log(entries(obj2));