"use strict";
console.log("Task 3");

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  event.target.value.trim() === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = "");
  nameOutput.textContent += event.target.value.trim();
});
