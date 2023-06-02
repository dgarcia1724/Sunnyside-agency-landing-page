const hamburger = document.querySelector(".hamburger");

const popUp = document.querySelector(".popUp");

hamburger.addEventListener("click", function () {
  popUp.classList.toggle("show");
});
