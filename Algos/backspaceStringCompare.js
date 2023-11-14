/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//            v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

// initiate an empty strings named temp and temp2
// loop through the string S
//   if the current letter is #
//     remove last character from temp string if possible
//   else
//     add current letter to temp
// loop through the string T
//   if the current letter is #
//     remove last character from temp2 string if possible
//   else
//     add current letter to temp2
// return (temp === T)

function gigaBrainBackspaceStringCompater(S, T) {
  let temp = []
  let temp2 = []
  let something = S.split("")
  let something2 = T.split("")
  for (letter of something) {
    if (letter == "#") {
      temp.pop()
    } else {
      temp.push(letter)
    }
  }
  for (letter of something2) {
    if (letter == "#") {
      temp2.pop()
    } else {
      temp2.push(letter)
    }
  }
  return (temp.toString() === temp2.toString())
}


function backspaceStringCompare(S, T) {
  let temp = ""
  let temp2 = ""
  for (letter of S) {
    if (letter == "#") {
      temp = temp.slice(0, temp.length - 1)
    }
    else {
      temp = temp.concat(letter)
    }
  }
  for (letter of T) {
    if (letter == "#") {
      temp2 = temp2.slice(0, temp2.length - 1)
    }
    else {
      temp2 = temp2.concat(letter)
    }
  }
  return (temp === temp2)
}

//---------------------

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))

//giga
console.log(gigaBrainBackspaceStringCompater(S1, T1))
console.log(gigaBrainBackspaceStringCompater(S2, T2))
console.log(gigaBrainBackspaceStringCompater(S3, T3))
console.log(gigaBrainBackspaceStringCompater(S4, T4))