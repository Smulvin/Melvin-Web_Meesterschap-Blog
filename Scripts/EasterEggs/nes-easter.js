/**********************/
/* Konami Easter Egg  */
/**********************/

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
    up: document.getElementById("dpad-up"),
    down: document.getElementById("dpad-down"),
    left: document.getElementById("dpad-left"),
    right: document.getElementById("dpad-right")
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



/********************/
/* Mario Easter Egg */
/********************/

const btnA = document.getElementById("nes-controller-a");

btnA.addEventListener("click", spawnMario);

// SFX
const jumpSFX = new Audio("../Assets/SFX/mario-jump.mp3");

// sprites
const marioRun1 = "../Assets/Images/EasterEggs/NES-Easter/mario-run1.png";
const marioRun2 = "../Assets/Images/EasterEggs/NES-Easter/mario-run2.png";
const marioRun3 = "../Assets/Images/EasterEggs/NES-Easter/mario-run3.png";
const marioJump = "../Assets/Images/EasterEggs/NES-Easter/mario-jump.png";

let activeMario = false;

function spawnMario() {
    if (activeMario) return;
    activeMario = true;

    const mario = document.createElement("img");
    mario.src = marioRun1;
    mario.classList.add("nes-mario");

    document.body.appendChild(mario);

    let x = -100;
    let y = 0;

    let frame = 0;
    let hasJumped = false;
    let jumping = false;

    const runFrames = [marioRun1, marioRun2, marioRun3];

    // 🏃 run animation always (except jump override)
    const spriteInterval = setInterval(() => {
        if (!jumping) {
            frame = (frame + 1) % runFrames.length;
            mario.src = runFrames[frame];
        }
    }, 120);

    const moveInterval = setInterval(() => {
        x += 4;

        if (!hasJumped && x > window.innerWidth / 2) {
            hasJumped = true;
            jumping = true;

            mario.src = marioJump;

            jumpSFX.volume = 0.2;
            jumpSFX.currentTime = 0;
            jumpSFX.play();

            let jumpHeight = 0;
            let goingUp = true;

            const jumpInterval = setInterval(() => {
                if (goingUp) {
                    jumpHeight += 6;
                    if (jumpHeight >= 90) goingUp = false;
                } else {
                    jumpHeight -= 6;

                    if (jumpHeight <= 0) {
                        jumpHeight = 0;
                        jumping = false;
                        clearInterval(jumpInterval);
                    }
                }

                y = -jumpHeight;
            }, 16);
        }

        mario.style.transform = `translate(${x}px, ${y}px)`;

        // cleanup
        if (x > window.innerWidth + 120) {
            clearInterval(moveInterval);
            clearInterval(spriteInterval);
            mario.remove();
            activeMario = false;
        }
    }, 16);
}

/***********************/
/* DuckHunt Easter Egg */
/***********************/

const btnB = document.getElementById("nes-controller-b");
const birdSFX = new Audio("../Assets/SFX/duck-hit.wav");
const birdImg = "../Assets/Images/EasterEggs/NES-Easter/falling-duck.png";

btnB.addEventListener("click", spawnBird);

function spawnBird() {
    // play sound
    birdSFX.currentTime = 0;
    birdSFX.play();

    const bird = document.createElement("img");
    bird.src = birdImg;
    bird.classList.add("nes-bird");

    // random X position
    let x = Math.random() * window.innerWidth;
    let y = -80;

    // sometimes mirror
    const mirrored = Math.random() > 0.5;
    const speed = 2 + Math.random() * 3;

    bird.style.transform = `
        translate(${x}px, ${y}px)
        scaleX(${mirrored ? -1 : 1})
    `;

    document.body.appendChild(bird);

    const interval = setInterval(() => {
        y += speed;

        bird.style.transform = `
            translate(${x}px, ${y}px)
            scaleX(${mirrored ? -1 : 1})
        `;

        // remove when off screen
        if (y > window.innerHeight + 100) {
            clearInterval(interval);
            bird.remove();
        }
    }, 16);
}