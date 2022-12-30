//////////////////////////////////////////////////
//Make Mobile Navigation work
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
// ("nav-open");

////////////////////////////////////////////////////
//MOBILE NAV MENU
const menuBtnEl = document.querySelector(".menu-btn");
const headerEl = document.querySelector(".page-header");

menuBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

