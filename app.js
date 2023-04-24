const buttonDecrease = document.body.querySelector(".decrease");
const buttonReset = document.body.querySelector(".reset");
const buttonIncrease = document.body.querySelector(".increase");
const counterHTML = document.body.querySelector("#value");
let counter = 0;

buttonDecrease.addEventListener("click", function () {
  counter--;
  counterHTML.style.color = "red";
  counterHTML.textContent = counter;
});

buttonReset.addEventListener("click", function () {
  counter = 0;
  counterHTML.style.color = "black";
  counterHTML.textContent = counter;
});

buttonIncrease.addEventListener("click", function () {
  counter++;
  counterHTML.style.color = "green";
  counterHTML.textContent = counter;
});
