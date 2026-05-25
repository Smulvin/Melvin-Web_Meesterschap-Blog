const powerBtn = document.getElementById("power-btn")
const powerSfx = new Audio("../Assets/SFX/wii-poweroff.mp3")

if (powerBtn && powerSfx) {
  powerBtn.addEventListener("click", () => {
    powerSfx.currentTime = 0
    powerSfx.volume = 0.3
    powerSfx.play()

    powerSfx.onended = () => {
      window.close()
    }
  })
}


// Controller shake
document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-button")
  const controller = document.getElementById("shake-wrapper")
    const shakeSfx = new Audio("../Assets/SFX/MarioSpin.mp3")

  let isLocked = false

  homeBtn.addEventListener("click", () => {
    if (isLocked) return // stop if still in cooldown

    isLocked = true

    controller.classList.remove("controller-shake")
    void controller.offsetWidth
    controller.classList.add("controller-shake")
    shakeSfx.currentTime = 0
    shakeSfx.volume = 0.3
    shakeSfx.play()

    // Unlock after 0.3 seconds
    setTimeout(() => {
      isLocked = false
    }, 600)
  })
})


const plusButton = document.getElementById("btn-plus");
const minusButton = document.getElementById("btn-minus");
const controller = document.getElementById("sports-wrapper");

// Audio (replace with your own Wii Sports sound)
const wiiSportsTheme = new Audio("../Assets/SFX/theme-wiisports.mp3");
wiiSportsTheme.loop = true;

// state
let wiiModeActive = false;

plusButton.addEventListener("click", () => {

    if (wiiModeActive) return;

    wiiModeActive = true;

    // visual mode
    controller.classList.add("wii-sports-mode");

    // audio
    wiiSportsTheme.currentTime = 0;
    wiiSportsTheme.volume = 0.3;
    wiiSportsTheme.loop = true;
    wiiSportsTheme.play();
});

minusButton.addEventListener("click", () => {

    if (!wiiModeActive) return;

    wiiModeActive = false;

    // remove visual mode
    controller.classList.remove("wii-sports-mode");

    // stop audio
    wiiSportsTheme.pause();
    wiiSportsTheme.currentTime = 0;
});