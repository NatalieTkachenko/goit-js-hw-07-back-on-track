"use strict";

const form = document.querySelector(".login-form");
const emailInput = form.querySelector("input[name='email']");
const passwordInput = form.querySelector("input[name='password']");

emailInput.addEventListener("input", (event) => {
  console.log(event.target.value.trim());
});

passwordInput.addEventListener("input", (event) => {
  console.log(event.target.value.trim());
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    return alert("All form fields must be filled in!");
  }
  const userCreds = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  console.log(userCreds);
  form.reset();
});
