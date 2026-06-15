let cube = document.getElementById('nes-controller');
let scene = document.getElementById('scene');

let rotX = -20;
let rotY = -30;

let isDragging = false;
let lastX = 0;
let lastY = 0;

function getPoint(e) {
    // mouse
    if (e.touches === undefined) {
        return { x: e.clientX, y: e.clientY };
    }

    // touch
    return {
        x: e.touches[0]?.clientX ?? e.changedTouches[0]?.clientX,
        y: e.touches[0]?.clientY ?? e.changedTouches[0]?.clientY
    };
}

// START (mouse + touch)
function startDrag(e) {
    if (
        e.target.closest('button') ||
        e.target.closest('a')
    ) return;

    isDragging = true;

    const p = getPoint(e);
    lastX = p.x;
    lastY = p.y;
}

function endDrag() {
    isDragging = false;
}

function moveDrag(e) {
    if (!isDragging) return;

    const p = getPoint(e);

    let deltaX = p.x - lastX;
    let deltaY = p.y - lastY;

    rotY += deltaX * 0.5;
    rotX -= deltaY * 0.5;

    cube.style.transform =
        `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    lastX = p.x;
    lastY = p.y;
}

// Mouse
scene.addEventListener('mousedown', startDrag);
window.addEventListener('mouseup', endDrag);
window.addEventListener('mousemove', moveDrag);

// Touch
scene.addEventListener('touchstart', startDrag, { passive: false });
window.addEventListener('touchend', endDrag);
window.addEventListener('touchmove', moveDrag, { passive: false });