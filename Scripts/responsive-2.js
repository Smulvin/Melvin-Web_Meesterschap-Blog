const wrappers = document.querySelectorAll(".responsive-wrapper");

function scaleControllers() {

    wrappers.forEach(wrapper => {

        const controller = wrapper.firstElementChild;

        const controllerWidth =
            parseFloat(wrapper.dataset.width);

        const controllerHeight =
            parseFloat(wrapper.dataset.height);

        const padding = 40;

        const availableWidth =
            window.innerWidth - padding;

        const availableHeight =
            window.innerHeight - padding;

        const scaleX =
            availableWidth / controllerWidth;

        const scaleY =
            availableHeight / controllerHeight;

        const scale = Math.min(scaleX, scaleY);

        controller.style.transform =
            `scale(${scale})`;

    });

}

window.addEventListener("resize", scaleControllers);

scaleControllers();