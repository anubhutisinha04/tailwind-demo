const menu = document.getElementById("menu");
const burgerBtn = document.getElementById("burger");

burgerBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
