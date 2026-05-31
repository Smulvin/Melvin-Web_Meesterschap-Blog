/* **************** */
/* Music Easter Egg */
/* **************** */

// Themes: Mario Kart and Bowsers Inside Story
const dpadUp = document.getElementById("dpad-up");
const dpadDown = document.getElementById("dpad-down");


// Music tracks
const MarioLand = new Audio("../Assets/SFX/theme-3dland.mp3");
const XYGym = new Audio("../Assets/SFX/theme-xygym.mp3");

// Loop both songs
MarioLand.loop = true;
XYGym.loop = true;

// UP = play Mario Kart theme
dpadUp.addEventListener("click", () => {

    // stop XY Gym Leader music if playing
    XYGym.pause();
    XYGym.currentTime = 0;

    // play Mario Kart music
    MarioLand.volume = 0.1;
    MarioLand.play();
});

// DOWN = play XY Gym Leader theme
dpadDown.addEventListener("click", () => {

    // stop Mario Kart music if playing
    MarioLand.pause();
    MarioLand.currentTime = 0;

    // play XY Gym Leader music
    XYGym.volume = 0.2;
    XYGym.play();
});


/* **************** */
/* Coins Easter Egg */
/* **************** */

const topCanvas = document.getElementById("top-canvas");
const bottomCanvas = document.getElementById("bottom-canvas");

const topCtx = topCanvas.getContext("2d");
const bottomCtx = bottomCanvas.getContext("2d");

const xButton = document.getElementById("btn-x");
const yButton = document.getElementById("btn-y");

const CoinMusic = new Audio("../Assets/SFX/theme-coinrush.mp3");
CoinMusic.loop = true;
CoinMusic.volume = 0.4;

const coinImg = new Image();
coinImg.src = "../Assets/Images/EasterEggs/Coin.png";

// Coin Class
class Coin {

    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = -50 - Math.random() * 500;

        this.size = 15 + Math.random() * 1.5;

        this.speed = 1 + Math.random() * 0.7;

        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }

    update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;

        if (this.y > this.canvas.height + 100) {
            this.reset();
        }
    }

    draw(ctx) {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.drawImage(
            coinImg,
            -this.size / 2,
            -this.size / 2,
            this.size,
            this.size
        );

        ctx.restore();
    }
}

// Create Coins
const topCoins = [];
const bottomCoins = [];

for (let i = 0; i < 80; i++) {

    topCoins.push(new Coin(topCanvas));
    bottomCoins.push(new Coin(bottomCanvas));
}

// Animation
let isAnimating = false;
let animationId = null;

function animate() {
    if (!isAnimating) return;

    topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height);
    bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);

    for (const coin of topCoins) {

        coin.update();
        coin.draw(topCtx);
    }

    for (const coin of bottomCoins) {

        coin.update();
        coin.draw(bottomCtx);
    }

    animationId = requestAnimationFrame(animate);
}


// Start Coins
function startCoins() {

    CoinMusic.play();

    if (isAnimating) return;

    topCanvas.classList.remove("hidden");
    bottomCanvas.classList.remove("hidden");

    isAnimating = true;

    animate();
}

// Stop Coins
function stopCoins() {
    CoinMusic.pause();
    CoinMusic.currentTime = 0;
    isAnimating = false;

    cancelAnimationFrame(animationId);

    topCanvas.classList.add("hidden");
    bottomCanvas.classList.add("hidden");

    topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height);
    bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);
}

// Buttons
xButton.addEventListener("click", () => {
    startCoins();
});

yButton.addEventListener("click", () => {
    stopCoins();
});


/* **************** */
/* Unown Easter Egg */
/* **************** */

const aButton = document.getElementById("btn-a");
const bButton = document.getElementById("btn-b");

const bottomScreen = document.getElementById("bottom-screen");

aButton.addEventListener("click", () => {
    bottomScreen.classList.add("unown-mode");
});

bButton.addEventListener("click", () => {
    bottomScreen.classList.remove("unown-mode");
});




/* ********************* */
/* Mario Kart Easter Egg */
/* ********************* */
const joystick = document.querySelector('.joystick');
const stick = joystick.querySelector('.stick');

const turboSound = new Audio("../Assets/SFX/kartBoost.wav");
turboSound.volume = 0.3;

const particles = [];

let lastAngle = null;
let driftCharge = 0;
let currentLevel = 0;

let wasDragging = false;
let lastPos = { x: 0, y: 0 };
let releaseCooldown = false;

const DRIFT_CONFIG = {
    particle: {
        amount: 6,          // particles per frame
        size: 1,            // base size
        sizeRandom: 2,      // extra randomness
        speed: 2,           // base speed
        speedRandom: 1,   // randomness
        life: 25,           // lifetime
    },

    drift: {
        startRadius: 12,    // joystick deadzone
        chargeThresholds: [6, 12, 20], // level 1/2/3
    },

    visuals: {
        colors: {
            1: "#00aaff",
            2: "#ff8800",
            3: "#cc44ff"
        }
    }
};


function getStickPosition() {
    const transform = getComputedStyle(stick).transform;

    if (transform === 'none') {
        return { x: 0, y: 0 };
    }

    const matrix = new DOMMatrix(transform);

    return {
        x: matrix.m41,
        y: matrix.m42
    };
}

function updateDrift() {
    const pos = getStickPosition();

    const distance = Math.hypot(pos.x, pos.y);

    if (distance < 12) {
        lastAngle = null;
        return;
    }

    const angle = Math.atan2(pos.y, pos.x);

    if (lastAngle !== null) {
        let delta = angle - lastAngle;

        if (delta > Math.PI) delta -= Math.PI * 2;
        if (delta < -Math.PI) delta += Math.PI * 2;

        driftCharge += Math.abs(delta);
    }

    lastAngle = angle;
}

function updateChargeLevel() {
    const t = DRIFT_CONFIG.drift.chargeThresholds;

    if (driftCharge > t[2]) currentLevel = 3;
    else if (driftCharge > t[1]) currentLevel = 2;
    else if (driftCharge > t[0]) currentLevel = 1;
}

function spawnParticle() {
    const pos = getStickPosition();

    if (Math.hypot(pos.x, pos.y) < DRIFT_CONFIG.drift.startRadius) return;

    for (let i = 0; i < DRIFT_CONFIG.particle.amount; i++) {

        const speed =
            DRIFT_CONFIG.particle.speed +
            (Math.random() - 0.5) * DRIFT_CONFIG.particle.speedRandom;

        const angle = Math.random() * Math.PI * 2;

        particles.push({
            x: 35 + pos.x,
            y: 35 + pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size:
                DRIFT_CONFIG.particle.size +
                Math.random() * DRIFT_CONFIG.particle.sizeRandom,
            life: DRIFT_CONFIG.particle.life,
            color: DRIFT_CONFIG.visuals.colors[currentLevel] || "#00aaff"
        });
    }
}

const canvas = document.querySelector('.drift-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 70;
canvas.height = 70;

function animateDrift() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateDrift();
    updateChargeLevel();
    spawnParticle();

    const pos = getStickPosition();

    // detect if user is actively dragging
    const isMoving = Math.hypot(pos.x, pos.y) > 2;

    // RELEASE DETECTED
    if (wasDragging && !isMoving && !releaseCooldown) {
        handleRelease();
    }

    wasDragging = isMoving;

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0)
            particles.splice(i, 1);
    }

    requestAnimationFrame(animateDrift);
}

function handleRelease() {

    // only trigger if fully charged (purple drift)
    if (currentLevel === 3) {
        turboSound.currentTime = 0;
        turboSound.play();
    }

    // reset drift state
    driftCharge = 0;
    currentLevel = 0;

    // small cooldown so it doesn't double trigger
    releaseCooldown = true;

    setTimeout(() => {
        releaseCooldown = false;
    }, 300);
}

animateDrift();

/* ********************* */
/* Hey Listen Easter Egg */
/* ********************* */
const homeBtn = document.getElementById("home-button");
const heyListen = new Audio("../Assets/SFX/hey-listen.mp3");
heyListen.volume = 0.4;

homeBtn.addEventListener("click", () => {
    heyListen.currentTime = 0;
    heyListen.play();
});