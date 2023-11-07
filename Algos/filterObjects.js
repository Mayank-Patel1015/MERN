/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
  // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];


// initiate an empty array named answerArray
// loop through the items
//   if currentItem matches the searchObj add to the answerArray
// return answerArray

function findObjectsFilter(searchObj, items) {
  let answerArr = []
  for (let i = 0; i < items.length; i++) {
    flag = 1
    for (let key in searchObj) {
      if (!(key in items[i]) || items[i][key] !== searchObj[key]) {
        flag = 0
      }
    }
    if (flag == 1) {
      answerArr.push(items[i])
    }
  }
  return answerArr
}


console.log(findObjectsFilter(searchFor1, items))
console.log(findObjectsFilter(searchFor2, items))