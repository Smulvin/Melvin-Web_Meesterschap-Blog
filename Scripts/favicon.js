const frames = [
    "../Assets/Images/Favicon/Running1.png",
    "../Assets/Images/Favicon/Running2.png",
    "../Assets/Images/Favicon/Running3.png",
    "../Assets/Images/Favicon/Running4.png"
];

let currentFrame = 0;

function animateFavicon() {
    const favicon = document.getElementById("favicon");

    currentFrame = (currentFrame + 1) % frames.length;
    favicon.href = frames[currentFrame];
}

setInterval(animateFavicon, 350);