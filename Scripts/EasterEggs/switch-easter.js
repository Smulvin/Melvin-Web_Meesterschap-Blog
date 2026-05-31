/*********************/
/*   Joy Con Colors  */
/*********************/

let leftJoycon = document.querySelector(".switch-left");
let rightJoycon = document.querySelector(".switch-right");

let minusBtn = document.getElementById("btn-minus");
let plusBtn = document.getElementById("btn-plus");

// Bron voor kleuren: https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYwY-w_I479WtU86ChXSwaWMJ_rT2GSUoILEcc6AADpwJnBXPFzl10Ckr4oc5XBoAs4j8agIUVv_HNU3zlHvDFhvo9sfnIk593Xn4JsS36Bltfv0zy9YRXKMVtKxAWB337klS9i0zNhOM&usqp=CAc
const leftColors = [
    "#d3c2d6", // Lavender
    "#a950b0", // Purple
    "#7ddead", // Teal
    "#82838a", // Gray
    "#46c4ea", // Light blue
    "#ad4fb7", // Magenta
    "#e2e2e2", // Light gray
    "#ed5d8b", // Pink
    "#474747",  // Dark gray
    "#01c4e0", // Default blue
];

const rightColors = [
    "#b2dcc5", // Mint
    "#fbba52", // Golden
    "#85e1e8", // Light blue
    "#85898c", // Gray
    "#ed7167", // Coral
    "#f56593", // Pink
    "#e3e3e3", // Light gray
    "#46d76d", // Green
    "#474747",  // Dark gray
    "#fe6054"   // Default red
];

/* State */
let leftIndex = 0;
let rightIndex = 0;

/* Smooth transition */
// leftJoycon.style.transition = "background 0.3s ease";
// rightJoycon.style.transition = "background 0.3s ease";

/* LEFT only */
minusBtn.addEventListener("click", () => {
    leftIndex = (leftIndex + 1) % leftColors.length;
    leftJoycon.style.background = leftColors[leftIndex];
});

/* RIGHT only */
plusBtn.addEventListener("click", () => {
    rightIndex = (rightIndex + 1) % rightColors.length;
    rightJoycon.style.background = rightColors[rightIndex];
});


// Themes: Gym Leader and Jump Up Super Start
const dpadUp = document.getElementById("btn-up");
const dpadDown = document.getElementById("btn-down");

// Music tracks
const GymTheme = new Audio("../Assets/SFX/theme-gymleader.mp3");
const SuperStarTheme = new Audio("../Assets/SFX/theme-superstar.mp3");

// Loop both songs
GymTheme.loop = true;
SuperStarTheme.loop = true;

// UP = play Gym Leader theme
dpadUp.addEventListener("click", () => {

    // stop Bowsers Inside Story music if playing
    SuperStarTheme.pause();
    SuperStarTheme.currentTime = 0;

    // play Gym Leader music
    GymTheme.volume = 0.2;
    GymTheme.play();
});

// DOWN = play SuperStarTheme theme
dpadDown.addEventListener("click", () => {

    // stop Gym Leader music if playing
    GymTheme.pause();
    GymTheme.currentTime = 0;

    // play Bowsers Inside Story music
    SuperStarTheme.volume = 0.2;
    SuperStarTheme.play();
});

/* ************************** */
/* Zelda BOTW/TOTK Easter Egg */
/* ************************** */
const container = document.getElementById("zelda-container");

// sprites
const arrow = document.getElementById("arrow");
const korok = document.getElementById("korok");

// joysticks
const leftJoystick = document.querySelector("#stick-left .stick");
const rightJoystick = document.querySelector("#stick-right .stick");

// sounds
const arrowSFX = new Audio("../Assets/SFX/arrow.mp3");
const korokSFX = new Audio("../Assets/SFX/korok.mp3");
arrowSFX.volume = 0.5;
korokSFX.volume = 0.5;


const SPEED = 8;
const DEADZONE = 8;
const COMMIT_TIME = 80;

/* ENTITY SYSTEM */
const entities = {
    arrow: {
        el: arrow,
        joystick: leftJoystick,
        active: false,
        launched: false,
        x: 0, y: 0,
        vx: 0, vy: 0,
        rotation: 0,
        holdStart: null,
        pending: null,
        sfx: arrowSFX
    },

    korok: {
        el: korok,
        joystick: rightJoystick,
        active: false,
        launched: false,
        x: 0, y: 0,
        vx: 0, vy: 0,
        rotation: 0,
        holdStart: null,
        pending: null,
        sfx: korokSFX
    
    }
};

/* JOYSTICK INPUT */
function getStick(joystick) {

    const transform = getComputedStyle(joystick).transform;

    if (!transform || transform === "none") {
        return { x: 0, y: 0 };
    }

    const m = new DOMMatrix(transform);

    return {
        x: m.m41,
        y: m.m42
    };
}

/* NORMALIZE */
function normalize(x, y) {

    const mag = Math.hypot(x, y);

    if (mag < DEADZONE) return null;

    return {
        x: x / mag,
        y: y / mag
    };
}

/* LAUNCH */
function launch(entity, dir) {

    const bounds = container.getBoundingClientRect();

    entity.sfx.currentTime = 0;
    entity.sfx.play();

    entity.x = bounds.width / 2;
    entity.y = bounds.height / 2;

    entity.vx = dir.x * SPEED;
    entity.vy = dir.y * SPEED;

    entity.rotation = Math.atan2(dir.y, dir.x);

    entity.active = true;

    entity.el.classList.remove("hidden");
}

/* INPUT HANDLING */
function updateEntity(entity) {

    const stick = getStick(entity.joystick);
    const dir = normalize(stick.x, stick.y);

    const isPushing = dir !== null;

    if (!isPushing) {
        entity.launched = false;
        entity.holdStart = null;
        entity.pending = null;
        return;
    }

    if (entity.holdStart === null) {
        entity.holdStart = performance.now();
        entity.pending = dir;
        return;
    }

    entity.pending = dir;

    if (
        !entity.launched &&
        performance.now() - entity.holdStart > COMMIT_TIME
    ) {
        launch(entity, entity.pending);
        entity.launched = true;
    }
}

/* MOVEMENT */
function updateMovement(entity) {

    if (!entity.active) return;

    const bounds = container.getBoundingClientRect();

    entity.x += entity.vx;
    entity.y += entity.vy;

    entity.el.style.transform =
        `translate(${entity.x}px, ${entity.y}px) rotate(${entity.rotation}rad)`;

    if (
        entity.x < -100 ||
        entity.x > bounds.width + 100 ||
        entity.y < -100 ||
        entity.y > bounds.height + 100
    ) {
        entity.active = false;
        entity.el.classList.add("hidden");
    }
}

/* LOOP */
function animate() {

    updateEntity(entities.arrow);
    updateEntity(entities.korok);

    updateMovement(entities.arrow);
    updateMovement(entities.korok);

    requestAnimationFrame(animate);
}

animate();