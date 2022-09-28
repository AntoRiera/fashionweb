const hamburger = document.querySelector(".hamburger");
const headercontentnavbar = document.querySelector(".header__content-navbar");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headercontentnavbar.classList.toggle("active");
})