const nav = document.querySelector(".nav-container");

const ham = document.querySelector(".ham");

const list = document.querySelectorAll(".nav-list li a");


ham.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    nav.classList.remove("nav-open");
  });
}
