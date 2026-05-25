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