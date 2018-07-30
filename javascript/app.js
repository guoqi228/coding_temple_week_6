// ------------ console.log() -------------- //
console.log("Hello World!");
console.log(1 + 1);

// ----------- strict mode 'use strict'; ---------------- //
"use strict";
console.log("Use strict mode!");
var name = "Clay";
console.log(name);

// ------------- declaring variables with var --------------- //
var name = "Jack";   //global variable
var num = 2;
console.log(num)

// ----------- declaring variables with let ------------- //
let local_num = 3;      // block/lcoal variable
console.log(local_num);

// ----------- declaring variables with const ------------ //
const const_num = 1000;   // constant
console.log(const_num);

// w------------ writing comments '//' or '/* */' ------------- //

// This is a one line comments

/* line 1
line 2
line 3 */

// --------------- Using an if statement ------------------ //
var i = "2";
if (i == 2) {
  // this executes when i == 2
  console.log("Equal");
};

// === also checks for var type
if (i === 2) {
  // this executes when i == 2
  console.log("Equal");
} else {
  console.log("Not Equal")
};


// --------------- Using an else statement ------------------ //



// --------------- Using an else if statement ------------------ //
if (i === 2) {
  // this executes when i == 2
  console.log("Equal");
} else if (1 == 2) {
  console.log("Equal, but different type")
} else {
  console.log("Not Equal")
};


// ----------- Ternary Operator -------------- //
// var name = (statement) ? if true : else;
var my_num = 9;

var is_even = (my_num % 2 === 0) ? true:false;
console.log(is_even);

// ----------- Defining a function ----------//
// function name() {}
function printHello() {
  console.log("Hello")
};

printHello();

// ---------------- Defining an anonymous function ----------//
// var name = function() {}
let printName = function(name){
  console.log(name);
};

let my_name = "Clay";
printName(my_name)

// es6 Arrow Functions
let myfunc = () => {
  console.log("This is an Arrow Function!")
};

myfunc();

// ------------- Declaring an array ------------- //
let my_arr = ["Conner", "Max", "Jordan", "Keith", 12];
console.log(my_arr);
console.log(my_arr[0]);
console.log(my_arr.length);

// ---------------- For Loops ----------------//
for (let i = 0; i < my_arr.length; i ++) {
  console.log(my_arr[i])
};

// ---------------- While Loops ----------------//
let j = 0
while (j < 10) {
  console.log(j);
  j ++;
}

let k = 0
while (true) {
  console.log(k);
  k ++;
  if (k == 5) {
    break;
  }
}

// ---------------- Do While Loops ----------------//
let n = 0;
do {
  console.log(n);
  n ++;
  if (n == 5) {
    break;
  }
} while (n > 0) ;

// ------------ Function using For Loop ------------//
// loop through names
let allNames = function(arr) {
  if (arr.length == 0) {
    console.log("Empty array!");
    return;
  }
  for (let m = 0; m < arr.length; m ++) {
    console.log(arr[m])
  }
}

name_arr_1 = ["Clay", "Matt", "Jack", "Jamie"];
name_arr_2 = [];
allNames(name_arr_1);
allNames(name_arr_2);

// --------------- Search --------------//
// .search("")
// string function, doesn't work for array
let my_string = "This is a string, match this.";
console.log(my_string.search('match'));
console.log(my_string.charAt(1));
console.log(my_string.search('apple'));
// --------------- Slicing --------------//
// slice string and arrays
my_slice = my_string.slice(0,5);
console.log(my_slice);

console.log(name_arr_1.slice(1,3));
console.log(name_arr_1[1,3]);

// --------------- Type Of ---------//
// typeof()
my_type = typeof(name_arr_1[1]);
console.log(my_type);

// --------- Concatenation ----------//
// can use either '+' or '.concat' with multiples
let my_string_2 = my_string + "Hello";
console.log(my_string_2);
console.log("Hello" + " " + "World!");
console.log("Good morning,".concat(" ","Clay!"));

// ----------- Injecting Variables into string ----------- //
// use `` and ${}
let dog_name = "Max";
let dog_color = "black";
let dogs = `My dog's name is ${dog_name}. He is ${dog_color}.`;
console.log(dogs);

// Exercise
// write a function that takes in a string and a list of
// dogs names, checks the current name is in the string
// passed in, outputs "Matched dog_name" if name is in
// string, otherwise, print "No match"
let dog_string = "Hello Max, my name is Dog, and I have Purple eyes!";
let dog_names = ["Max", "HAVE", "PuRple", "dog"];

let findMatch = function(input_str, input_list) {
  for (let x = 0; x < input_list.length; x ++) {
    if (input_str.toLowerCase().search(input_list[x].toLowerCase()) >= 0) {
      console.log("Matched" + " " + input_list[x]);
    } else {
      console.log("No Match" + " " + input_list[x]);
    }
  }
}

findMatch(dog_string, dog_names);

/*--------------------------------------
------------- Array Methods ------------
----------------------------------------*/

// -------------- pop() --------------- //
// a_1.pop()
console.log(dog_names.pop());
console.log(dog_names);

// --------------- push() -------------- //
// a_1.push("");
console.log(name_arr_1.push("Dan"));
console.log(name_arr_1);

// --------------- shift() --------------- //
// .shift() returns index 0
console.log(name_arr_1.shift()); // return first value
console.log(name_arr_1);

// --------------- unshift() ------------ //
// .unshift("") replaces element to beginning and returns new array length
console.log(name_arr_1.unshift("Ethan"));
console.log(name_arr_1);

// ---------------- delete --------------- //
// delete a_1[0] turns element into undefined
delete name_arr_1[0];
console.log(name_arr_1);

// --------------- splicing() ------------ //
// place to insert, num to remove, vars
name_arr_1.splice(1, 0, "Dan");
console.log(name_arr_1);

// Exercise
// write a function that takes in a list, removes every
// even index with a splice, and replace it with "even
// index"
let replaceEven = function(arr) {
  for (let x = 0; x < arr.length; x ++) {
    if (x % 2 == 0) {
      arr.splice(x, 1 , `${x}th` + " index")
    };
  };
  console.log(arr);
};

input_arr = [0, 1, 2, 3, 4, 5, 6, 7];
replaceEven(input_arr);

// -------------  splice to remove items ------------ //
// splice(start, end) removes items
input_arr.splice(0, 3); // start from 0 index, remove 3 elements
console.log(input_arr);

// --------------- merge arrays -------------- //
// a_1.concat(a_2)
input_arr_2 = [5, 6, 7, 8, 9, 5, 4, 3];
console.log(input_arr.concat(input_arr_2));

// ---------------- min() ------------- //
// Math.min.apply(min, max) use null on array for first parameter
console.log(Math.min.apply(null, input_arr_2));

// -------------- max() ----------------- //
// Math.max.apply(min, max) use null on array for first parameter
console.log(Math.max.apply(null, input_arr_2));

// ----------- string sort --------------- //
// a_1.sort()
console.log(name_arr_1.sort());

// ----------- string reverse --------------- //
// a_1.reverse()
console.log(input_arr.reverse());

// ------------- numerical sort ------------- //
// a_num.sort(function(a, b){return a - b})
input_arr_2.sort(function(a, b) {return a - b});
console.log(input_arr_2);

// ------------------------------------- //
// ------ Writing Scripts in Line ------ //
// ------------------------------------- //
