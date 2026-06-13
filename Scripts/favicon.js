const favicon = document.getElementById("favicon");

const basePath = favicon.href.replace("Idle.png", "");

const frames = [
    `${basePath}Running1.png`,
    `${basePath}Running2.png`,
    `${basePath}Running3.png`,
    `${basePath}Running4.png`
];

let currentFrame = 0;

function animateFavicon() {
    currentFrame = (currentFrame + 1) % frames.length;
    favicon.href = frames[currentFrame];
}

setInterval(animateFavicon, 350);