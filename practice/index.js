// DOM Manipulation

// ----- PART 1 -----

// 1 -- getElementById()

//const title = document.getElementById("main-heading");
//console.log(title);

// 2 -- getElementByClassName()

//const listItems = document.getElementsByClassName(".list-items");
//console.log(listItems);

// 3 -- getElementByTagName()

//const listItems = document.getElementsByTagName("li");
//console.log(listItems);

// 4 -- querySelector()

//const container = document.querySelector("div");
//console.log(container);

// 5 -- querySelectorAll()

//const containers = document.querySelectorAll("div");
//console.log(containers);

// ----- PART 2 -----

//const title = document.querySelector("#main-heading");
//title.style.color = "red";

// const listItems = document.querySelectorAll(".list-items");

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "20px";
// }

// Creating elements

//const ul = document.querySelector("ul");
//const li = document.createElement("li");

// Adding elements

//ul.append(li);

// Modifying the text

//li.innerText = "Squat";
//li.style.fontSize = "20px";

// Modifying attributes and classes

//li.classList.add("list-items");
//console.log(li.classList.contains("list-items"));

// Remove elements

//li.remove();

// ----- PART 3 -----
// Traverse the DOM

// Parent node traversal

//let ul = document.querySelector("ul");

//console.log(ul.parentNode.parentNode.parentNode.parentNode);
//console.log(ul.parentElement.parentElement.parentElement);

// Child node traversal

//let ul = document.querySelector("ul");

//console.log(ul.childNodes);
//console.log(ul.firstChild);
//console.log(ul.lastChild);

//ul.childNodes[1].style.backgroundColor = "blue";

// Sibling node traversal

// let ul = document.querySelector("ul");
// const div = document.querySelector("div");

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// ----- PART 4 -----

// Event listeners

// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//   alert("I do not like to be clicked!!");
// }

// buttonTwo.addEventListener("click", alertBtn);

// // Reveal text

// const revealBtn = document.querySelector(".revealBtn");

// const hiddenText = document.querySelector(".hidden-text");

// function revealText() {
//   if (hiddenText.classList.contains("revealBtn")) {
//     hiddenText.classList.remove("revealBtn");
//   } else {
//     hiddenText.classList.add("revealBtn");
//   }
// }

// revealBtn.addEventListener("click", revealText);

// ----- PART 5 -----

// Event propagation:
// 1) Event capturing, 2) target, 3) event bubbling

// ----- PART 6 -----

// Event delegation:
// It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector.

// document.querySelector(".buttons").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + " is clicked");

//   const target = e.target;

//   if (target.matches("button")) {
//     target.style.backgroundColor = "green";
//   }
// });
