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

    const activeButton = screenButtons[currentIndex];
    activeButton.classList.add("active");

    const content = document.querySelector(".switch-screen .content");

    const target =
        activeButton.offsetLeft -
        (content.clientWidth / 2) +
        (activeButton.offsetWidth / 2);

    content.scrollTo({
        left: target,
        behavior: "smooth"
    });
}

function openCurrentScreen() {
    if (viewingScreen) return;

    viewingScreen = true;

    const target = screenButtons[currentIndex].dataset.page;

    screenMenu.classList.add("hidden");

    detailScreens.forEach(screen => {
        screen.classList.toggle(
            "active-screen",
            screen.dataset.page === target
        );
    });
}

function closeCurrentScreen() {
    viewingScreen = false;

    detailScreens.forEach(screen => {
        screen.classList.remove("active-screen");
    });

    screenMenu.classList.remove("hidden");

    updateSelection();
}

/* ------------------------
   BUTTON CONTROLS
------------------------ */

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
aBtn.addEventListener("click", openCurrentScreen);

// BACK (B)
bBtn.addEventListener("click", closeCurrentScreen);

/* ------------------------
   MOUSE CONTROLS
------------------------ */

screenButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (viewingScreen) return;

        currentIndex = index;
        updateSelection();
    });

    button.addEventListener("dblclick", () => {
        if (viewingScreen) return;

        currentIndex = index;
        updateSelection();
        openCurrentScreen();
    });
});

/* ------------------------
   KEYBOARD CONTROLS
------------------------ */

document.addEventListener("keydown", (e) => {
    if (e.repeat) return;

    switch (e.key) {
        /* navigation */
        case "ArrowLeft":
            if (viewingScreen) return;

            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = screenButtons.length - 1;
            }
            updateSelection();
            break;

        case "ArrowRight":
            if (viewingScreen) return;

            currentIndex++;
            if (currentIndex >= screenButtons.length) {
                currentIndex = 0;
            }
            updateSelection();
            break;

        case "ArrowUp":
            if (viewingScreen) return;

            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = screenButtons.length - 1;
            }
            updateSelection();
            break;

        case "ArrowDown":
            if (viewingScreen) return;

            currentIndex++;
            if (currentIndex >= screenButtons.length) {
                currentIndex = 0;
            }
            updateSelection();
            break;

        /* open */
        case "Enter":
            openCurrentScreen();
            break;

        /* close */
        case "Escape":
            if (viewingScreen) {
                closeCurrentScreen();
            }
            break;
    }
});

/* ------------------------
   INIT
------------------------ */

updateSelection();