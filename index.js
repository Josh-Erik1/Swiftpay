const toggle = document.getElementById("toggle");

const icon = toggle.querySelector("span");

console.log(toggle);
console.log(icon);

toggle.addEventListener("click", () => {
  console.log(icon);
  icon.classList.toggle("show");
  icon.classList.toggle("");
});
