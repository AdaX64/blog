const headerNav = document.querySelector(".header-nav");
let lastScroll = 0;
const debounce = 10;

window.addEventListener("scroll", function () {
    let current = window.pageYOffset;

    if (lastScroll < current) {
        headerNav.classList.add("hidden");
    }
    if (lastScroll > current) {
        headerNav.classList.remove("hidden");
    }

    lastScroll = current;
});
