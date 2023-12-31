/**
  // GIVEN
  console.log(example);
  var example = "I'm the example!";
  AFTER HOISTING BY THE INTERPRETER
  // var example;
  // console.log(example); // logs undefined
  // example = "I'm the example!";
**/

console.log(example);
let example = "I'm the example!";    

// console.log(example); // error (let/const not hoisted var is)
// example = "I'm the example!";    

// 1
console.log(hello);                                   
var hello = 'world';                                 

// var hello;
// console.log(hello); // logs undsefined 
// hello = 'world';


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);   // logs magnet
// }
// test();


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);    // logs only okay (isn't run/called)
// }
// console.log(brendan); //  logs super cool


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// console.log(food);  // logs chicken
// function eat(){
//     food = 'half-chicken';
//     console.log(food);   // logs half-chicken
//     var food = 'gone';
// }
// eat();


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean
// mean();                     // error trying to call undefined function
// console.log(food);
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


// 6 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre
// console.log(genre); // logs undefined
// genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre); // logs rock
//     var genre = "r&b"; 
//     console.log(genre);  // logs r&b
// }
// rewind();
// console.log(genre);    // logs disco


// 7 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// console.log(dojo);     // logs san jose
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);  // logs seattle
//     var dojo = "burbank";
//     console.log(dojo); // logs burbank
// }
// learn();
// console.log(dojo);   // logs san jose

// 8 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // {hiring: true, name: chicago, students: 65 }
// console.log(makeDojo("Berkeley", 0)); // error cannot set object to string