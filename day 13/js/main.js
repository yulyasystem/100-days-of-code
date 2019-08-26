import "../sass/main";

let links = document.querySelectorAll(".reveal-block__link");
let contentOfBlock = document.querySelector(".reveal-block__text");
let main = document.querySelector(".reveal-block");

function toggleClass() {
  this.classList.toggle(".active");
}

main.addEventListener("click", ({ target }) => {
  target.nextElementSibling.classList.toggle("active");
  console.log(target.nextElementSibling, "target");
});
