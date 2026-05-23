const timeButton = document.getElementById("time-button");
const screen = document.querySelector(".screen");

const timeDisplay = document.createElement("div");
timeDisplay.classList.add("time-display");

screen.appendChild(timeDisplay);

timeButton.addEventListener("click", showTime);

function showTime() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    timeDisplay.classList.add("active");

    setTimeout(() => {
        timeDisplay.classList.remove("active");
    }, 3000);
}