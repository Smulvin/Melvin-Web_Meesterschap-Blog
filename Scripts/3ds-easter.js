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
coinImg.src = "../Assets/Images/3DS/Coin.png";

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