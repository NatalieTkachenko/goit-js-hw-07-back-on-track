"use strict";
console.log("Task 1");

const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);

categories.forEach((category) => {
  console.log("Category: ", category.querySelector("h2").textContent);
  const elements = category.querySelectorAll("li");
  console.log("Elements: ", elements.length);
});
