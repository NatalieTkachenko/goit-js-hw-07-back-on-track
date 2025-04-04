"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.body;
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();
  colorSpan.textContent = newColor;
  body.style.backgroundColor = newColor;
});
