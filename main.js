const menuBar = document.querySelector(".menu__bar");
const menu = document.querySelector(".menu");
const closeBar = document.querySelector(".close__btn");

menuBar.addEventListener("click", function () {
  menu.style.display = "flex";
});

closeBar.addEventListener("click", function () {
  menu.style.display = "none";
});
