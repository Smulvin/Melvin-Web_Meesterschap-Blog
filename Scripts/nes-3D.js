/* ---------------- */
/* Making Cube Spin */
/* ---------------- */  

let cube = document.getElementById('nes-controller');

let rotX = -20;
let rotY = -30;

let isDragging = false;
let lastX, lastY;

window.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY;

    rotY += deltaX * 0.5;
    rotX -= deltaY * 0.5;

    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    lastX = e.clientX;
    lastY = e.clientY;
});

