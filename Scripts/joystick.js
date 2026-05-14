console.log('Joystick script loaded');
document.querySelectorAll('.joystick').forEach(joystick => {
    const stick = joystick.querySelector('.stick');

    let dragging = false;
    const maxDistance = 20;

    joystick.addEventListener('pointerdown', () => {
        dragging = true;
    });

    document.addEventListener('pointermove', (e) => {
        if (!dragging) return;

        const rect = joystick.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let x = e.clientX - centerX;
        let y = e.clientY - centerY;

        const distance = Math.sqrt(x * x + y * y);

        if (distance > maxDistance) {
            const angle = Math.atan2(y, x);
            x = Math.cos(angle) * maxDistance;
            y = Math.sin(angle) * maxDistance;
        }

        stick.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.addEventListener('pointerup', () => {
        dragging = false;
        stick.style.transform = 'translate(0px, 0px)';
    });
});