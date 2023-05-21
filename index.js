const hamburger = document.querySelector(".toggle__button");
const bars = document.querySelectorAll(".bars");
const navMenu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");

const faqToggle = document.querySelectorAll(".faq__toggle");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

faqToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");

    const faqAnswer = toggle.parentElement.nextElementSibling;

    faqAnswer.classList.toggle("hide");
  });
});
