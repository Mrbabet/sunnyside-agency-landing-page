const menuBtn = document.querySelector(".menu-btn");
const hiddenMenu = document.querySelector(".nav-mobile");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  hiddenMenu.classList.toggle("open");
});
