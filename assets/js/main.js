const headerNav = document.querySelector(".header-nav");
const navBox = document.querySelectorAll(".nav-box");
let lastScroll = 0;
const debounce = 10;
const Width = window.innerWidth;
let currentHeight = (Width * 9) / 16;

window.addEventListener("scroll", function () {
    let current = window.pageYOffset;

    if (lastScroll < current) {
        headerNav.classList.add("hidden");
    }
    if (lastScroll > current) {
        headerNav.classList.remove("hidden");
    }

    lastScroll = current;
    console.log(current);
    if (current > currentHeight / 3) {
        headerNav.classList.add("add-color");
        navBox.forEach((element) => {
            element.classList.remove("add-shadow");
        });
    } else {
        navBox.forEach((element) => {
            element.classList.add("add-shadow");
        });
        headerNav.classList.remove("add-color");
    }
});
