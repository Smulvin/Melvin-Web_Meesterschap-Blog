/* **************** */
/* Color Easter Egg */
/* **************** */

let leftJoyStick = document.getElementById("stick-left");
let rightJoyStick = document.getElementById("stick-right");

let minusBtn = document.getElementById("btn-minus");
let plusBtn = document.getElementById("btn-plus");

// Bron voor kleuren: https://platform.theverge.com/wp-content/uploads/sites/2/2026/01/nintendo_switch2_joycons1.jpg?quality=90&strip=all&crop=16.658266129032,0,66.683467741935,100
const leftColors = [
    "#bc8fd5", // Purple
    "#53b8dc", // Default blue
];

const rightColors = [
    "#7eede2",  // blue
    "#fd886f"   // Default red
];

/* State */
let leftIndex = 0;
let rightIndex = 0;

/* LEFT only */
minusBtn.addEventListener("click", () => {
    leftIndex = (leftIndex + 1) % leftColors.length;
    leftJoyStick.style.background = leftColors[leftIndex];
});

/* RIGHT only */
plusBtn.addEventListener("click", () => {
    rightIndex = (rightIndex + 1) % rightColors.length;
    rightJoyStick.style.background = rightColors[rightIndex];
});



/* **************** */
/* Music Easter Egg */
/* **************** */
// Themes: Gym Leader and Jump Up Super Start
const dpadUp = document.getElementById("btn-up");
const dpadDown = document.getElementById("btn-down");

// Music tracks
const RapTheme = new Audio("../Assets/SFX/theme-dkrap.mp3");
const CometObservatoryTheme = new Audio("../Assets/SFX/theme-observatory.mp3");

// Loop both songs
RapTheme.loop = true;
CometObservatoryTheme.loop = true;

// UP = play Rap theme
dpadUp.addEventListener("click", () => {

    // stop Bowsers Inside Story music if playing
    CometObservatoryTheme.pause();
    CometObservatoryTheme.currentTime = 0;

    // play Rap music
    RapTheme.volume = 1;
    RapTheme.play();
});

// DOWN = play CometObservatoryTheme theme
dpadDown.addEventListener("click", () => {

    // stop Rap music if playing
    RapTheme.pause();
    RapTheme.currentTime = 0;

    // play CometObservatoryTheme music
    CometObservatoryTheme.volume = 0.6;
    CometObservatoryTheme.play();
});

/* ************** */
/* SFX Easter Egg */
/* ************** */

const homeButton = document.getElementById("btn-home");
const screenshotButton = document.getElementById("btn-screenshot");
const onlineButton = document.getElementById("btn-online");

const homeSFX = new Audio("../Assets/SFX/gitgud.mp3");
const screenshotSFX = new Audio("../Assets/SFX/GOW-Boy.mp3");
const onlineSFX = new Audio("../Assets/SFX/sigma.mp3");

homeButton.addEventListener("click", () => {
    homeSFX.volume = 0.5;
    homeSFX.play();
});

screenshotButton.addEventListener("click", () => {
    screenshotSFX.volume = 0.5;
    screenshotSFX.play();
});

onlineButton.addEventListener("click", () => {
    onlineSFX.volume = 0.5;
    onlineSFX.play();
});









/* ************************ */
/* Hollow Knight Easter Egg */
/* ************************ */
const container = document.getElementById("flea-container");

// sprites
const flea = document.getElementById("flea");
const grub = document.getElementById("grub");

// joysticks
const leftJoystick = document.querySelector("#stick-left .stick");
const rightJoystick = document.querySelector("#stick-right .stick");

// sounds
const fleaSFX = new Audio("../Assets/SFX/flea.mp3");
const grubSFX = new Audio("../Assets/SFX/grub.mp3");

const SPEED = 8;
const DEADZONE = 8;
const COMMIT_TIME = 80;

/* ENTITY SYSTEM */
const entities = {
    flea: {
        el: flea,
        joystick: rightJoystick,
        active: false,
        launched: false,
        x: 0, y: 0,
        vx: 0, vy: 0,
        rotation: 0,
        holdStart: null,
        pending: null,
        sfx: fleaSFX
    },

    grub: {
        el: grub,
        joystick: leftJoystick,
        active: false,
        launched: false,
        x: 0, y: 0,
        vx: 0, vy: 0,
        rotation: 0,
        holdStart: null,
        pending: null,
        sfx: grubSFX
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

    updateEntity(entities.flea);
    updateEntity(entities.grub);

    updateMovement(entities.flea);
    updateMovement(entities.grub);

    requestAnimationFrame(animate);
}

animate();