
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    slides[index].classList.add("active");
}

document
    .getElementById("right-btn")
    .addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

document
    .getElementById("left-btn")
    .addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });

showSlide(currentSlide);
