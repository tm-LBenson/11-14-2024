"use strict";

let numbers = [100, 456, 98, 45, 43, 73];

let allNumbersList = document.getElementById("all-numbers");
let evensList = document.getElementById("evens-list");


for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  let li = `<li> ${num} </li>`;
  allNumbersList.innerHTML += li;
}



let evens = numbers.filter((number) => {
  return number % 2 === 0
});


evens.forEach((number) => {
  evensList.innerHTML += `<li> ${number} </li>`;
});



