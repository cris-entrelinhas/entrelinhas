const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const year = document.querySelector("[data-year]");

const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
    document.body.classList.remove("nav-open");
    header.classList.remove("nav-active");
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
};

menuButton.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("is-open");

    document.body.classList.toggle("nav-open", willOpen);
    header.classList.toggle("nav-active", willOpen);
    nav.classList.toggle("is-open", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
});

nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
        closeMenu();
    }
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMenu();
    }
});

year.textContent = new Date().getFullYear();
updateHeader();
