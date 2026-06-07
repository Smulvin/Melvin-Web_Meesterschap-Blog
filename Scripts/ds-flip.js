const topSection = document.querySelector("#top-section");
const breakpoint = 1024;

topSection.addEventListener("click", () => {
    topSection.classList.toggle("closed");
});

function checkScreenWidth() {
    if (window.innerWidth < breakpoint) {
        topSection.classList.add("closed");
        topSection.classList.add("mobile-mode");
    } else {
        topSection.classList.remove("closed");
        topSection.classList.remove("mobile-mode");
    }
}

checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);