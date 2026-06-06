const nav = document.querySelector("nav");
const items = [...document.querySelectorAll("nav a")];

const openBtn = document.getElementById("open-nav");
openBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open");

    if (nav.classList.contains("nav-open")) {
        openBtn.textContent = "Close";
    } else {
        openBtn.textContent = "Open";
    }
});