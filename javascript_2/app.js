// simple object in JS -------------- //
var person = {
  name: "Max",
  age: 26,
  fav_color: "Green",
  language: ["Javascript", "Python", "C#", "Java"],
  team: {
    baseball: "Boston Red Sox",
    football: "New England Patriots",
    hockey: "Boston Bruins",
    soccer: ["New England", "France", "England", "Croatia"]
  }
}

console.log(person);
console.log(person.age);
console.log(person.language.length);
console.log(typeof person.team.length);
console.log(person.team.baseball);
console.log(person.team.soccer);

// var parseTeam = function(obj) {
//   for (let key in obj) {
//       items = obj[key];
//       if (typeof items != "object") {
//         console.log(key + ": " + items);
//       } else {
//         if (typeof items.length != "undefined") {
//           for (let i = 0; i < items.length; i ++) {
//             console.log(key + ": " + items[i]);
//           }
//         } else {
//               subobj = items;
//               console.log("subobj.keys");
//               console.log(subobj.key);
//               for (let subkey in subobj.key) {
//                 subitems = items[subkey];
//                 console.log(subkey + ": " + subitems);
//               }
//           }
//         }
//       }
//   }
//
// parseTeam(person);
// complex object in JS ------------- //




// object prototype -------------- //
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.printInfo = function() {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
  }
}

let myCar = new Car("Subaru", "Impreza", 2016);
console.log(myCar.make);
myCar.printInfo();

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.printInfo = () => {
    console.log(`Name is ${this.name}, age is ${this.age}`);
    this.age += 1;
  }
}

let employee_1 = new Person("Clay", 29);
employee_1.printInfo();
employee_1.printInfo();

// function closures ---------- //
var counter = 0;

var countUp = (function() {
  let counter = 0;
  console.log("Hit");
  return function() {return counter ++;}
})();

console.log(countUp());
console.log(countUp());
console.log(countUp());


// classes ---------------- //
// class classPerson {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//
//   printInfo() {
//     console.log(`Name: ${this.name}`)
//   }
// }

let p1 = new classPerson("Max", 26, "Male");
p1.printInfo();



// inheriting -------------- //
class Animal extends classPerson {
  makeSound() {
    console.log("Bark!")
  }
}


// importing classes ----------- //
import {classPerson} from './person.js';


// --------------- JQuery ------------ //

// Accessing an element by class name ------- //
// document.
var hello = document.getElementsByClassName("hello");
console.log(hello);


// Accessing an element by id ------------ //
// document.
var pizza = document.getElementById("pizza");
console.log(pizza);


// Setting an attribute with a selector ------ //
// document.
pizza.setAttribute("style", "color: red");

// Getting all of a specific item -------- //
// navbar links
// document.
var my_links = document.querySelectorAll("nav ul li a")
console.log(my_links);

for (let i = 0; i < my_links.length; i ++) {
  my_links[i].style.color = "red";
}


// Setting attributes for all links --------- //
// document.


// Appending text to a child ------------ //
// document.
function addText() {
  var pannel = document.getElementById("pannel");
  var pText = document.createElement("p");
  var strongText = document.createElement("strong");
  var totalText = document.createTextNode("Total: ");
  var money = document.createTextNode("$ 3.09");
  strongText.appendChild(totalText);
  pText.appendChild(strongText);
  pText.appendChild(money);
  pannel.appendChild(pText);
}

addText();
// Setting an event listener ---------- //
// document.
var my_button = document.getElementById("help");

my_button.addEventListener("click", function() {
  pizza.setAttribute("style", "display: none")
})

// Changing the value of a form field ----- //
// $ .val
$("#my_submit").val("Order");
$("#my_input").attr("placeholder", "Full Name");


// Changing direct HTML on an element ------ //
//hello[0].html("<h5><i> I changed this element!</i></h5>");
$(".hello").html('<h5 class="hello"><i> I changed this element!</i></h5>');

// Changing or adding text ----------- //
$("#pizza").text("Would you like to order?");

// Adding a class to change the color -------- //
$(".hello").addClass("colorChange");

$("#person").html(`<h1>Name: ${p1.name} <br> Age: ${p1.age} <br> Gender: ${p1.gender}`);

$("#my_input").attr("placeholder", `${p1.name}`);

// Changing img src --------------- //

//var paris = $("#paris").attr("src");
var newParis = "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

$("#paris").attr("src", newParis);
$("img").css("height", 200);


// ----------------------------------- //

// --------------- JQuery ------------ //

// Accessing an element by class name ------- //
// document.



// Accessing an element by id ------------ //
// document.



// Setting an attribute with a selector ------ //
// document.



// Getting all of a specific item -------- //
// navbar links
// document.querySelectorAll("nav ul li a");



// Setting attributes for all links --------- //
// document.



// Appending text to a child ------------ //
// document.



// Setting an event listener ---------- //
// document.



// Changing the value of a form field ----- //
// $ .val



// Changing direct HTML on an element ------ //



// Changing or adding text ----------- //



// Adding a class to change the color -------- //



// Changing img src --------------- //




// ----------------------------------- //
