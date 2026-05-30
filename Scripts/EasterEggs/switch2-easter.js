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