const iframe = document.querySelector("#iframe-wrapper iframe");
const leftBtn = document.querySelector("#dpad-left");
const rightBtn = document.querySelector("#dpad-right");

// Base “design width” your iframe expects
const BASE_WIDTH = 1450;

let currentWidth = BASE_WIDTH;

const MIN_WIDTH = 400;
const MAX_WIDTH = BASE_WIDTH;
const STEP = 75;

function updateIframe() {
    iframe.style.width = `${currentWidth}px`;

    // scale so it always fits inside the DS screen
    const dsVisibleWidth = iframe.parentElement.offsetWidth;
    const scale = dsVisibleWidth / currentWidth;

    iframe.style.transformOrigin = "top left";
    iframe.style.transform = `scale(${scale})`;
}

// D-pad controls
leftBtn.addEventListener("click", () => {
    currentWidth = Math.max(MIN_WIDTH, currentWidth - STEP);
    updateIframe();
});

rightBtn.addEventListener("click", () => {
    currentWidth = Math.min(MAX_WIDTH, currentWidth + STEP);
    updateIframe();
});

// init
updateIframe();