var person = {
  name: "Max",
  age: 26
}

function addHeader() {
  var main = document.getElementById("main");
  var header = document.createElement("header");
  var strongText = document.createElement("strong");
  var name = document.createTextNode(`Name: ${person.name}`);
  strongText.appendChild(name);
  header.appendChild(strongText);
  main.appendChild(header);
}
addHeader();
$("header").css("text-align", "center");
$("strong").css("font-size", "50px");

function addNav() {
  var main = document.getElementById("main");
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  var li_1 = document.createElement("li");
  var li_2 = document.createElement("li");
  var li_3 = document.createElement("li");
  var a_1 = document.createElement("a");
  var a_2 = document.createElement("a");
  var li_1_text = document.createTextNode('Page 1');
  var li_2_text = document.createTextNode('Page 2');
  var age = document.createTextNode(`Age: ${person.age}`);
  a_1.appendChild(li_1_text);
  a_2.appendChild(li_2_text);
  li_1.appendChild(a_1);
  li_2.appendChild(a_2);
  li_3.appendChild(age);
  ul.appendChild(li_1);
  ul.appendChild(li_2);
  ul.appendChild(li_3);
  nav.appendChild(ul);
  main.appendChild(nav);
}

addNav();
$("ul").css("list-style-type", "none");
$("nav").css("border-top", "black 3px solid");
$("nav").css("border-bottom", "black 3px solid");
$("a").css("font-size", "20px");
$("a").css("padding-left", "100px");
$("li").css("font-size", "20px");
$("li").css("display", "inline");
$("li").css("padding-left", "150px");
$("li").css("padding-right", "150px");


function addLeftBody() {
  var main = document.getElementById("main");
  var left = document.createElement("div");
  main.appendChild(left);
}

// addLeftBody();
// $("div").text('Header');
