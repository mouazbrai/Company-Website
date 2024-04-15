// Navbar Toggle Button Script
let navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener("click", () => {
    let checkDownUp = navbarToggler.firstElementChild;
    if (checkDownUp.getAttribute("data-down-up") == "false") {
        checkDownUp.classList.remove("fa-circle-chevron-down");
        checkDownUp.classList.add("fa-circle-chevron-up");
        checkDownUp.setAttribute("data-down-up", "true");
    } else {
        checkDownUp.classList.remove("fa-circle-chevron-up");
        checkDownUp.classList.add("fa-circle-chevron-down");
        checkDownUp.setAttribute("data-down-up", "false");
    }
});
// Scroll Effect Script
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("p-3");
    } else {
        navbar.classList.remove("p-3");
    }
});