// Kirby Suck Easter Egg
const bButton = document.getElementById("gameboy-b");
const kirbySuck = new Audio("../Assets/SFX/kirby-suck.mp3");

bButton.addEventListener("click", triggerKirbySuck);

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function triggerKirbySuck() {

    const sfx = kirbySuck.cloneNode();
    sfx.play();

    const inner = document.querySelector(".gameboy-inner");
    inner.classList.add("sucked-away");

    await wait(800);

    // hide completely so it doesn't affect scroll/layout
    inner.style.display = "none";
}

//Gemaakt door AI
// Prompt 1: New idea. When you press the A button I would like it to "start" a pokemon encounter. I actually just want a visual 
// effect on the screen display of little squares going in a loop from outside to the inside filling the display and having a sfx start

// Prompt 2: Okay so none of that was a spiral. I would like it to be just the way it was on a normal gameboy. Little squares filled 
// the screen in a spiral shape going from outside to the middle until the whole screen was covered

// Pokemon Encounter Easter Egg
const aButton = document.getElementById("gameboy-a");
const screen = document.querySelector(".gameboy-screen");

const encounterSfx = new Audio("../Assets/SFX/pokemon-encounter.mp3");

aButton.addEventListener("click", startEncounter);

function startEncounter() {

    const sfx = encounterSfx.cloneNode();
    sfx.play();

    runSpiralEncounter();
}

function runSpiralEncounter() {

    const overlay = document.createElement("div");
    overlay.classList.add("encounter-overlay");
    screen.appendChild(overlay);

    const size = 10;
    const speed = 6;

    const cols = Math.ceil(screen.clientWidth / size);
    const rows = Math.ceil(screen.clientHeight / size);

    const grid = [];

    // build grid
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

            const square = document.createElement("div");
            square.classList.add("encounter-square");

            square.style.left = `${x * size}px`;
            square.style.top = `${y * size}px`;

            overlay.appendChild(square);

            grid.push({ el: square });
        }
    }

    const spiralOrder = getSpiralOrder(cols, rows);

    // animate spiral
    spiralOrder.forEach((index, i) => {

        const cell = grid[index];

        if (!cell) return;

        setTimeout(() => {
            cell.el.classList.add("active");
        }, i * speed);
    });

    // cleanup
    setTimeout(() => {
        overlay.remove();
    }, spiralOrder.length * speed + 500);
}

function getSpiralOrder(cols, rows) {

    const result = [];

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (left <= right && top <= bottom) {

        // left → right
        for (let x = left; x <= right; x++) {
            result.push(top * cols + x);
        }
        top++;

        // top → bottom
        for (let y = top; y <= bottom; y++) {
            result.push(y * cols + right);
        }
        right--;

        if (top <= bottom) {

            // right → left
            for (let x = right; x >= left; x--) {
                result.push(bottom * cols + x);
            }
            bottom--;
        }

        if (left <= right) {

            // bottom → top
            for (let y = bottom; y >= top; y--) {
                result.push(y * cols + left);
            }
            left++;
        }
    }

    return result;
}

// Themes: Zelda and Tetris
const dpadUp = document.getElementById("dpad-up");
const dpadDown = document.getElementById("dpad-down");

// Music tracks
const zeldaTheme = new Audio("../Assets/SFX/theme-zelda.mp3");
const tetrisTheme = new Audio("../Assets/SFX/theme-tetris.mp3");

// Loop both songs
zeldaTheme.loop = true;
tetrisTheme.loop = true;

// UP = play Zelda theme
dpadUp.addEventListener("click", () => {

    // stop Tetris music if playing
    tetrisTheme.pause();
    tetrisTheme.currentTime = 0;

    // play Zelda music
    zeldaTheme.volume = 0.5;
    zeldaTheme.play();
});

// DOWN = play Tetris theme
dpadDown.addEventListener("click", () => {

    // stop Zelda music if playing
    zeldaTheme.pause();
    zeldaTheme.currentTime = 0;

    // play Tetris music
    tetrisTheme.volume = 0.5;
    tetrisTheme.play();
});