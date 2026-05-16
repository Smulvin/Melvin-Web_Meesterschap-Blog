const topSlides = document.querySelectorAll("#top-screen .slide");
const bottomSlides = document.querySelectorAll("#bottom-screen .slide");

let currentSlide = 0;

function showSlide(index) {

    // remove active from all top slides
    topSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    // remove active from all bottom slides
    bottomSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    // activate matching slide
    topSlides[index].classList.add("active");
    bottomSlides[index].classList.add("active");
}

document
    .getElementById("dpad-right")
    .addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= topSlides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });


document
    .getElementById("dpad-left")
    .addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = topSlides.length - 1;
        }

        showSlide(currentSlide);
    });

showSlide(currentSlide);