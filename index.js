const hamburger = document.querySelector(".toggle__button");
const bars = document.querySelectorAll(".bars");
const navMenu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
