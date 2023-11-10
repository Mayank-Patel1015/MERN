/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

let students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
  }
];

// Ninja.findByIdAndUpdate(req.params._id, {updateObject})

/*
here is a multi line
comment
*/

// JSDOCS

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedValues Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */


// function findByIdAndUpdate(id, updatedValues, collection) {
//   ansObj = null
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].id == id) {
//       let keys = Object.keys(updatedValues)
//       for (let j = 0; j < keys.length; j++) {
//         if (collection[i][keys[j]] !== undefined) {
//           collection[i][keys[j]] = updatedValues[keys[j]]
//         }
//       }
//       ansObj = collection[i]
//       break
//     }
//   }
//   return ansObj
// }


function findByIdAndUpdate(id, updatedValues, collection) {
  for (let student of collection) {
    if (student.id == id) {
      for (key of Object.keys(updatedValues)) {
        if (student[key] !== undefined) { student[key] = updatedValues[key] }
      }
      return student
    }
  }
  return null
}


console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));




// initiate an empty object "ansObj" to null for the return
// loop through the students array:
//   if the currentStudent id matches the id we are updating:
//     create keys array containg the keys in updatedValues
//     loop through the keys:
//       if the key is in the object:
//         update the value of the key to the value of the key in updatedValues
//       set the ansObj to currentStudent
// return ansObj






/*--- TEST the following: ---
Input: 3, { redBeltStatus: true }, students
Output: {
  id: 3,
  name: "student3",
  isLateToday: false,
  lateCount: 0,
  redBeltStatus: true
}
*/

/*
Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
Output: {
  id: 1,
  name: "student1",
  isLateToday: true,
  lateCount: 16,
  redBeltStatus: false
}
*/

// Input: 5, {}, students
// Output: null