const screenButtons = document.querySelectorAll(".screen-btn");
const detailScreens = document.querySelectorAll(".detail-screen");

const screenMenu = document.querySelector(".screen-menu");

const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");
const aBtn = document.getElementById("btn-a");
const bBtn = document.getElementById("btn-b");

let currentIndex = 0;
let viewingScreen = false;

function updateSelection() {
    screenButtons.forEach(button => {
        button.classList.remove("active");
    });

    screenButtons[currentIndex].classList.add("active");
}

// LEFT
leftBtn.addEventListener("click", () => {
    if (viewingScreen) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = screenButtons.length - 1;
    }

    updateSelection();
});

// RIGHT
rightBtn.addEventListener("click", () => {
    if (viewingScreen) return;

    currentIndex++;

    if (currentIndex >= screenButtons.length) {
        currentIndex = 0;
    }

    updateSelection();
});

// OPEN (A)
aBtn.addEventListener("click", () => {
    if (viewingScreen) return;

    viewingScreen = true;

    const target = screenButtons[currentIndex].dataset.page;

    screenMenu.classList.add("hidden");

    detailScreens.forEach(screen => {
        const match = screen.dataset.page === target;

        screen.classList.toggle("active-screen", match);
    });
});

// BACK (B)
bBtn.addEventListener("click", () => {
    viewingScreen = false;

    detailScreens.forEach(screen => {
        screen.classList.remove("active-screen");
    });

    screenMenu.classList.remove("hidden");
});

// init
updateSelection();