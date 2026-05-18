const footer = document.querySelector("footer");
const items = [...document.querySelectorAll("footer a")];

footer.addEventListener("mousemove", (e) => {
    const rect = footer.getBoundingClientRect();
    const mouseX = e.clientX;

    items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;

        const distance = Math.abs(mouseX - itemCenter);

        // normalize distance (0 = center, ~150px = far)
        const maxDist = 150;
        let t = Math.max(0, 1 - distance / maxDist);

        // smooth curve (cosine feel)
        const scale = 1 + Math.cos((1 - t) * Math.PI) * 0.25;

        item.style.transform = `scale(${scale})`;
    });
});

footer.addEventListener("mouseleave", () => {
    items.forEach(item => {
        item.style.transform = "scale(1)";
    });
});

const openBtn = document.getElementById("open-footer");
openBtn.addEventListener("click", () => {
    footer.classList.toggle("open");
});