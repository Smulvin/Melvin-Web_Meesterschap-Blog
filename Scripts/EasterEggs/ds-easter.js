const btnA = document.getElementById("a-button");
const btnB = document.getElementById("b-button");

const overlay = document.getElementById("wanted-overlay");
const topScreen = document.getElementById("wanted-top");
const bottomScreen = document.getElementById("wanted-bottom");
const targetImg = document.getElementById("wanted-target");

const wantedTheme = new Audio("../Assets/SFX/theme-wanted.mp3");
wantedTheme.volume = 0.2;
wantedTheme.loop = true;

// Characters (source of truth)
const characters = [
    {
        name: "mario",
        head: "../Assets/Images/EasterEggs/FindLuigi/Mario-Head.png",
        icon: "../Assets/Images/EasterEggs/FindLuigi/Mario-icon.png"
    },
    {
        name: "luigi",
        head: "../Assets/Images/EasterEggs/FindLuigi/Luigi-Head.png",
        icon: "../Assets/Images/EasterEggs/FindLuigi/Luigi-icon.png"
    },
    {
        name: "wario",
        head: "../Assets/Images/EasterEggs/FindLuigi/Wario-Head.png",
        icon: "../Assets/Images/EasterEggs/FindLuigi/Wario-icon.png"
    },
    {
        name: "yoshi",
        head: "../Assets/Images/EasterEggs/FindLuigi/Yoshi-Head.png",
        icon: "../Assets/Images/EasterEggs/FindLuigi/Yoshi-icon.png"
    }
];

// SFX per character
const headSFX = {
    mario: "../Assets/SFX/FoundMario.wav",
    luigi: "../Assets/SFX/FoundLuigi.wav",
    wario: "../Assets/SFX/FoundWario.wav",
    yoshi: "../Assets/SFX/FoundYoshi.wav"
};

let objects = [];
let running = false;
let correctName = null;
let correctIcon = null;

btnA.addEventListener("click", startGame);
btnB.addEventListener("click", stopGame);

function playWinSFX(name) {
    const audio = new Audio(headSFX[name]);
    audio.volume = 0.5;
    audio.play();
}

function startGame() {
    stopPictoChat();
    KartTheme.pause();
    KartTheme.currentTime = 0;
    bowsersInsideTheme.pause();
    bowsersInsideTheme.currentTime = 0; 

    wantedTheme.currentTime = 0;
    wantedTheme.play();

    overlay.classList.remove("hidden");
    bottomScreen.classList.remove("hidden");

    bottomScreen.innerHTML = "";
    objects = [];

    // 🎯 pick target character
    const char = characters[Math.floor(Math.random() * characters.length)];

    targetImg.src = char.head;
    correctIcon = char.icon;
    correctName = char.name;

    // build pool (exactly 1 correct)
    const pool = [];

    pool.push({
        src: correctIcon,
        name: correctName,
        correct: true
    });

    while (pool.length < 30) {
        const randChar = characters[Math.floor(Math.random() * characters.length)];

        if (randChar.icon === correctIcon) continue;

        pool.push({
            src: randChar.icon,
            name: randChar.name,
            correct: false
        });
    }

    pool.sort(() => Math.random() - 0.5);

    pool.forEach(item => {
        const el = document.createElement("img");
        el.src = item.src;
        el.classList.add("wanted-head");

        const obj = {
            el,
            x: Math.random() * (bottomScreen.clientWidth - 50),
            y: Math.random() * (bottomScreen.clientHeight - 50),
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            correct: item.correct,
            name: item.name
        };

        el.addEventListener("click", () => {
            if (obj.correct) {
                playWinSFX(obj.name);
                endGame(true);
            } else {
                el.style.opacity = "0.2";
            }
        });

        bottomScreen.appendChild(el);
        objects.push(obj);
    });

    if (!running) {
        running = true;
        animate();
    }
}

function animate() {
    if (!running) return;

    const w = bottomScreen.clientWidth;
    const h = bottomScreen.clientHeight;

    objects.forEach(obj => {
        obj.x += obj.vx;
        obj.y += obj.vy;

        if (obj.x <= 0 || obj.x >= w - 48) obj.vx *= -1;
        if (obj.y <= 0 || obj.y >= h - 48) obj.vy *= -1;

        obj.el.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
    });

    requestAnimationFrame(animate);
}

function stopAudio() {
    wantedTheme.pause();
    wantedTheme.currentTime = 0;
}

function endGame(success) {
    running = false;

    stopAudio();

    overlay.classList.add("hidden");
    bottomScreen.classList.add("hidden");
}

function stopGame() {
    running = false;

    stopAudio();

    bottomScreen.innerHTML = "";
    objects = [];

    overlay.classList.add("hidden");
    bottomScreen.classList.add("hidden");

}


// Themes: Mario Kart and Bowsers Inside Story
const dpadUp = document.getElementById("dpad-up");
const dpadDown = document.getElementById("dpad-down");

// Music tracks
const KartTheme = new Audio("../Assets/SFX/theme-mariokart.mp3");
const bowsersInsideTheme = new Audio("../Assets/SFX/theme-bowsersinside.mp3");

// Loop both songs
KartTheme.loop = true;
bowsersInsideTheme.loop = true;

// UP = play Mario Kart theme
dpadUp.addEventListener("click", () => {

    // stop Bowsers Inside Story music if playing
    bowsersInsideTheme.pause();
    bowsersInsideTheme.currentTime = 0;

    // play Mario Kart music
    KartTheme.volume = 0.1;
    KartTheme.play();
});

// DOWN = play Bowsers Inside Story theme
dpadDown.addEventListener("click", () => {

    // stop Mario Kart music if playing
    KartTheme.pause();
    KartTheme.currentTime = 0;

    // play Bowsers Inside Story music
    bowsersInsideTheme.volume = 0.2;
    bowsersInsideTheme.play();
});


const btnX = document.querySelector(".x-button");
const btnY = document.querySelector(".y-button");

const pictoTop = document.getElementById("pictochat-top");
const pictoLoading = document.getElementById("pictochat-loading");

btnX.addEventListener("click", startPictoChat);
btnY.addEventListener("click", stopPictoChat);

function startPictoChat() {
    stopGame();

    pictoTop.classList.remove("hidden");
    pictoLoading.classList.remove("hidden");
}

function stopPictoChat() {
    pictoTop.classList.add("hidden");
    pictoLoading.classList.add("hidden");
}