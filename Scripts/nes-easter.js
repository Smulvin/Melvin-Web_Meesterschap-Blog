const konamiCode = [
    "up",
    "up",
    "down",
    "down",
    "left",
    "right",
    "left",
    "right"
];

let currentInput = [];

// Load sound directly in JS
const sound = new Audio("Assets/SFX/SMB-1up.mp3");

// D-pad buttons
const buttons = {
    up: document.getElementById("nes-dpad-up"),
    down: document.getElementById("nes-dpad-down"),
    left: document.getElementById("nes-dpad-left"),
    right: document.getElementById("nes-dpad-right")
};

Object.entries(buttons).forEach(([direction, button]) => {

    button.addEventListener("click", () => {

        currentInput.push(direction);

        // Keep latest inputs only
        if (currentInput.length > konamiCode.length) {
            currentInput.shift();
        }

        // Check code
        const success =
            JSON.stringify(currentInput) === JSON.stringify(konamiCode);

        if (success) {
            activateKonami();
        }
    });

});

async function activateKonami() {

    console.log("KONAMI CODE ACTIVATED");

    // Play sound 30 times
    for (let i = 0; i < 30; i++) {

        // Clone allows overlapping playback
        const sfx = sound.cloneNode();

        sfx.play();

        await wait(1200);
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}