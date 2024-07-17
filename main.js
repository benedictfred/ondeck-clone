const menuBar = document.querySelector(".menu__bar");
const menu = document.querySelector(".menu");
const closeBar = document.querySelector(".close__btn");

menuBar.addEventListener("click", function () {
  menu.style.display = "flex";
  setTimeout(() => {
    menu.classList.add("active");
  }, 10);
});

closeBar.addEventListener("click", function () {
  menu.classList.remove("active");
  setTimeout(() => {
    menu.style.display = "none";
  }, 300);
  menuBar.style.display = "flex";
});
