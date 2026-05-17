const nerdButtons = document.querySelectorAll(".nerd-btn");
const nerdScreens = document.querySelectorAll(".nerd-screen");

const nerdMenu = document.querySelector(".nerd-menu");

const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");
const aBtn = document.getElementById("btn-a");
const bBtn = document.getElementById("btn-b");

let currentNerd = 0;
let viewingScreen = false;

function updateSelection() {

    nerdButtons.forEach(button => {
        button.classList.remove("active");
    });

    const activeButton = nerdButtons[currentNerd];

    activeButton.classList.add("active");

    activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });
}



leftBtn.addEventListener("click", () => {

    if (viewingScreen) return;

    currentNerd--;

    if (currentNerd < 0) {
        currentNerd = nerdButtons.length - 1;
    }

    updateSelection();
});



rightBtn.addEventListener("click", () => {

    if (viewingScreen) return;

    currentNerd++;

    if (currentNerd >= nerdButtons.length) {
        currentNerd = 0;
    }

    updateSelection();
});



aBtn.addEventListener("click", () => {

    if (viewingScreen) return;

    viewingScreen = true;

    const selectedButton = nerdButtons[currentNerd];
    const target = selectedButton.dataset.nerd;

    nerdMenu.classList.add("hidden");

    nerdScreens.forEach(screen => {
        screen.classList.remove("active-screen");
    });

    document
        .querySelector(`[data-screen="${target}"]`)
        .classList.add("active-screen");
});



bBtn.addEventListener("click", () => {

    viewingScreen = false;

    nerdScreens.forEach(screen => {
        screen.classList.remove("active-screen");
    });

    nerdMenu.classList.remove("hidden");
});



updateSelection();